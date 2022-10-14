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

  //get board by id
  const getBoardById = (board_id) => {

    return new Promise(async (resolve, reject) => {
      try {
        const board = await boardModel.findOne({_id: board_id}).populate({path: "space", model: spaceModel})
        .populate({path: "desktopUnits", model: UnitModel}).populate({path: "tabletUnits", model: UnitModel}).populate({path: "mobileUnits", model: UnitModel});
        const data = {
          id: board._id,
          name: board.name,
          space: {
            id: board.space._id,
            name: board.space.name,
          },
          description: board.description,
          desktopUnits: board.desktopUnits.map((dataUnit) => {
            return {
              id: dataUnit._id,
              name: dataUnit.name,
              colSpan: dataUnit.colSpan,
              rowSpan: dataUnit.rowSpan,
              componentName: dataUnit.componentName,
              componentData: dataUnit.componentData,
              order: dataUnit.order,
            };
          }),
          tabletUnits: board.tabletUnits.map((dataUnit) => {
            return {
              id: dataUnit._id,
              name: dataUnit.name,
              colSpan: dataUnit.colSpan,
              rowSpan: dataUnit.rowSpan,
              componentName: dataUnit.componentName,
              componentData: dataUnit.componentData,
              order: dataUnit.order,
            };
          }),
          mobileUnits: board.mobileUnits.map((dataUnit) => {
            return {
              id: dataUnit._id,
              name: dataUnit.name,
              colSpan: dataUnit.colSpan,
              rowSpan: dataUnit.rowSpan,
              componentName: dataUnit.componentName,
              componentData: dataUnit.componentData,
              order: dataUnit.order,
            };
          }),
        };
        resolve(data);
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
  //Return Function to be used
  return {
    insertBoard,
    getBoards,
    getBoardById,
    deleteBoard,
  };
};
