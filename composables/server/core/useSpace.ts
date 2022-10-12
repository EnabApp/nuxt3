import { sendError } from "h3";

export default () => {
  const { spaceRefactor } = useRefactor();

  // Export Function to be used
  const insertSpace = ({name, business_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const space = new spaceModel({
          name,
          business: business_id,
          description: description,
        });
        await space.save();
        resolve(spaceRefactor(space));
      } catch (err) {
        reject(err);
      }
    });
  };
  
  const getSpaces = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const spaces = await spaceModel.find().populate("business");
    const data = spaces.map((space) => {
      return {
        id: space._id,
        name: space.name,
        business: {
          id: space?.business?._id,
          name: space?.business?.name,
        },
        description: space.description,
        is_active: space.is_active,
        boardsCount: space.boards.length,
      };
    });
    resolve(data);
  } catch (err) {
        reject(err);
      }
    });
  };

  const getSpaceById = (space_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const space = await spaceModel
          .findOne({ _id: space_id })
          .populate({ path: "business", model: businessModel })
          .populate({
            path: "boards",
            model: boardModel,
            populate: [
              { path: "desktopUnits", model: UnitModel },
              { path: "tabletUnits", model: UnitModel },
              { path: "mobileUnits", model: UnitModel },
            ],
          });
        const data = {
          id: space?._id,
          name: space?.name,
          business: {
            id: space?.business?._id,
            name: space?.business?.name,
          },
          description: space?.description,
          is_active: space?.is_active,
          boards: space?.boards?.map((board) => {
            return {
              id: board?._id,
              name: board?.name,
              is_active: board?.is_active,
              description: board?.description,
              units: {
                desktop: board?.desktopUnits,
                tablet: board?.tabletUnits,
                mobile: board?.mobileUnits,
              },
            };
          }),
          boardsCount: space?.boards?.length,
        };
        resolve(data);
      }catch (err) {
        reject(err);
      }
    });
  };
      //Return Function to be used
      return {
        insertSpace,
        getSpaces,
        getSpaceById,
      };
    };
