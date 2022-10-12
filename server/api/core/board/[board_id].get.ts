import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const board_id = await event.context.params.board_id;
    if (!board_id) return { error: "board_id is required" };

    const board = await boardModel
      .find({ _id: board_id })
      .populate({ path: "space", model: spaceModel })
      .populate({ path: "Units", model: UnitModel });
    const data = board.map((board) => {
      return {
        id: board._id,
        name: board.name,
        space: {
          id: board.space._id,
          name: board.space.name,
        },
        description: board.description,
        is_active: board.is_active,
        Units: board.Units.map((dataUnit) => {
          return {
            id: dataUnit._id,
            name: dataUnit.name,
          };
        }),
        UnitsCount: board.Units.length,
      };
    });
    return { data };
  } catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: err.message,
      })
    );
  }
});
