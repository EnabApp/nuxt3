import { sendError } from "h3";
export default () => {
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
        resolve(business);
      } catch (err) {
        reject(err);
      }
    });
    
    //Return Function to be used
    return {
      inserBusiness,
    };
  };
};

