export default () => {
  // Export Function to be used
  const insertBorad = ({ name, space_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Do Something
        const borad = new boradModel({
          name: name,
          space: space_id,
          description: description,
        });

        await borad.save();
        resolve(borad);
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertBorad,
  };
};
