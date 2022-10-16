export default () => {
  // Export Function to be used
  const { userRefactor } = useRefactor();

  const insertUser = async (data) => {
    console.log("insertUser");
    return new Promise(async (resolve, reject) => {
      try {
        const user = new userModel({
          _id: data.id,
          name: data.name,
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
