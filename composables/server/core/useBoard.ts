export default () => {
  // Export Function to be used
  const insertBoard = ({ name, space_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
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

  const getBoards = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const boards = await boardModel.find({});
        resolve(boards);
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertBoard,
    getBoards,
  };
};
