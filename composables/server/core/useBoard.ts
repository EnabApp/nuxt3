export default () => {
  // Export Function to be used
  const insertBoard = ({ name, space_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Do Something
        const board = new boardModel({
          name: name,
          space: space_id,
          description: description,
        });

        await board.save();
        resolve(board);
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertBoard,
  };
};
