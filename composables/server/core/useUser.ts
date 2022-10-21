import mongoose from "mongoose";
export default () => {
  const insertUser = async (data, name) => {
    console.log("insertUser");
    console.log(data);
    return new Promise(async (resolve, reject) => {
      try {
        const user = new userModel({
          name: name,
          email: data.email,
        });
        await user.save();
        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  };

  const getUserById = (user_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await userModel
          .findOne({ _id: user_id })
          .populate({ path: "profile", model: profileModel });
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    getUserById,
    insertUser,
  };
};
