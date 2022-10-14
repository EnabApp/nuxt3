import { sendError } from "h3";
export default () => {
  const { businessRefactor, businessCategoryRefactor } = useRefactor();
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
        resolve(businessRefactor(business));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBusinesses = () => {
    console.log('fdfsd')
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
        resolve(businessCategoryRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBusinessCategories = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await businessCategoryModel.find({});
        resolve(data);
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
  };
};
