export default () => {
  // Export Function to be used

  const getUserById = (user_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await userModel
          .findOne({ _id: user_id })
          .populate("profile");
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    getUserById,
  };
};
