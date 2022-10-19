import { sendError } from "h3";

export default () => {
  // Export Function to be used
  const insertSpace = ({ name, business_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const space = new spaceModel({
          name,
          business: business_id,
          description: description,
        });

        await space.save();

        //push space to business
        const business = await businessModel.findByIdAndUpdate( business_id, { $push: { spaces: space } }, { new: true } );

        if (!business) {
          reject("Business not found");
        }
        
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
            description: space?.description,
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

        resolve(spaceRefactor(space));
      } catch (err) {
        reject(err);
      }
    });
  };

  const getSpaceByBusinessId = (business_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const spaces = await spaceModel
          .find({ business: business_id })
          .populate("business");
        const data = spaces.map((space) => {
          return {
            id: space._id,
            name: space?.name,
            business: {
              id: space?.business?._id,
              name: space?.business?.name,
            },
            description: space?.description,
            is_active: space?.is_active,
            boardsCount: space?.boards?.length,
          };
        });
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  };

  const deleteSpace = (space_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        await spaceModel.findByIdAndDelete(space_id);
        resolve("Space Deleted");
      } catch (err) {
        reject(err);
      }
    });
  };

  const updateSpace = ({ id, name, business_id, description }) => {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await spaceModel.findOneAndUpdate(
          { _id: id },
          {
            name,
            business: business_id,
            description,
          },
          { new: true }
        );
        resolve(spaceRefactor(data));
      } catch (err) {
        reject(err);
      }
    });
  };

  //Return Function to be used
  return {
    insertSpace,
    getSpaces,
    getSpaceById,
    getSpaceByBusinessId,
    deleteSpace,
    updateSpace,
  };
};
