import { sendError } from "h3";
export default () => {
  // Export Function to be used
  const insertBusiness = ({ name, user_id, category_id, address }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const business = new businessModel({
          name: name,
          users: [
            {
              user_id: user_id,
              Permissions: ["owner"],
            },
          ],
          categories: [category_id],
          address: address,
        });

        await business.save();

        const user = await userModel.findByIdAndUpdate(user_id
          , { $push: { businesses: business } }
          , { new: true }
        );

        if (!user) {
          reject("User not found");
        }

        resolve(businessRefactor(business));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBusinesses = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const businesses = await businessModel
          .find({})
          .populate({ path: "categories", model: businessCategoryModel });
        const data = businesses.map((business) => {
          return businessRefactor(business);
        });
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };

  const insertBusinessCategory = ({ name }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = new businessCategoryModel({
          name: name,
        });
        await data.save();
        resolve(businessCategoryRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBusinessCategories = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await businessCategoryModel
          .find({})
          .select({ name: 1, _id: 1 });
        resolve(data.map((item) => businessCategoryRefactor(item)));
      } catch (err) {
        reject(err);
      }
    });
  };

  const deleteBusiness = (business_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await businessModel.findByIdAndDelete(business_id);
        resolve("Business Deleted");
      } catch (err) {
        reject(err);
      }
    });
  };

  const deleteCategory = (category_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await businessCategoryModel.findByIdAndDelete(category_id);

        resolve("Category Deleted");
      } catch (err) {
        reject(err);
      }
    });
  };

  //update business
  const updateBusiness = ({ id, name, user_id, category_id, address }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await businessModel.findOneAndUpdate(
          { _id: id },
          {
            name: name,
            users: [
              {
                user_id: user_id,
                Permissions: ["owner"],
              },
            ],
            categories: [category_id],
            address: address,
          },
          { new: true }
        );
        resolve(businessRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  //update business category
  const updateBusinessCategory = ({ id, name, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await businessCategoryModel.findOneAndUpdate(
          { _id: id },
          {
            name: name,
            description: description,
          },
          { new: true }
        );
        resolve(businessCategoryRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertBusiness,
    getBusinesses,
    insertBusinessCategory,
    getBusinessCategories,
    deleteBusiness,
    deleteCategory,
    updateBusiness,
    updateBusinessCategory,
  };
};
