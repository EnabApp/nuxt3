import { sendError } from "h3";

export default () => {
  const { spaceRefactor } = useRefactor();

  // Export Function to be used
  const inserSpace = ({ name, business_id, description }) => {
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

  const getSpace = () => {
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
  //Return Function to be used
  return {
    inserSpace,
    getSpace,
  };
};
