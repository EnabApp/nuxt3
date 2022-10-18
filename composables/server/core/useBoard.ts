export default () => {
  // Export Function to be used
  const insertBoard = ({ name, space_id, points, description, desktopUnits, tabletUnits, mobileUnits, category_id, packages }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const board = new boardModel({
          name,
          space_id,
          points,
          description,
          desktopUnits,
          tabletUnits,
          mobileUnits,
          category_id,
          packages,
        });

        await board.save();
        resolve(boardRefactor(board));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getBoards = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const boards = await boardModel.find({}).select("_id name space_id points description category_id");
        resolve(boards.map((board) => boardRefactor(board)));
      } catch (err) {
        reject(err);
      }
    });
  };

  //get board by id
  const getBoardById = (board_id) => {

    return new Promise(async (resolve, reject) => {
      try {
        const board = await boardModel.findOne({ _id: board_id }).populate({ path: "space", model: spaceModel })
          .populate({ path: "desktopUnits", model: UnitModel }).populate({ path: "tabletUnits", model: UnitModel })
          .populate({ path: "mobileUnits", model: UnitModel }).populate({ path: "category_id", model: boardCategoryModel })
          .populate({ path: "packs", model: packModel });
        resolve(boardRefactor(board));
      } catch (err) {
        reject(err);
      }
    });
  };



  const deleteBoard = (board_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await boardModel.findByIdAndDelete(board_id);
        resolve("Board deleted");
      } catch (err) {
        reject(err);
      }
    });
  };
  //update board
  const updateBoard = ({ id, name, space_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await boardModel.findOneAndUpdate(
          { _id: id },
          {
            name: name,
            description: description,
            space: space_id,
          },
          { new: true }
        );
        resolve(boardRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertBoard,
    getBoards,
    getBoardById,
    deleteBoard,
    updateBoard,
  };
};
