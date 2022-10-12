import { sendError } from "h3";
export default () => {
  const { businessRefactor } = useRefactor();
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
    return new Promise(async (resolve, reject) => {
      try {
        const businesses = await businessModel
          .find({})
          .populate({ path: "categories", model: businessCategoryModel });
        businesses.map((business) => {
          return businessRefactor(business);
        });
        resolve(businesses);
      } catch (err) {
        reject(err);
      }
    });
  };
  //Return Function to be used
  return {
    insertBusiness,
    getBusinesses,
  };
};
