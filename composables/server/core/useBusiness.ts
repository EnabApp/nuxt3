import { sendError } from "h3";
export default () => {
  const { businessRefactor } = useRefactor();
  // Export Function to be used
  const inserBusiness = ({ name, user_id, category_id, address }) => {
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

  const getBusiness = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const businesses = await businessModel
          .find({})
          .populate({ path: "categories", model: businessCategoryModel });
        const data = businesses.map((business) => {
          return {
            id: business._id,
            name: business.name,
            user: {
              id: business.users[0].user_id,
              permissions: business.users[0].Permissions,
            },
            address: business.address,
            categories: business.categories.map((category) => {
              return {
                id: category._id,
                name: category.name,
              };
            }),
            spacesCount: business.spaces.length,
            is_active: business.is_active,
          };
        });
        resolve(data)
      } catch (err) {
        reject(err);
      }
    });
  };
  //Return Function to be used
  return {
    inserBusiness,
    getBusiness,
  };
};
