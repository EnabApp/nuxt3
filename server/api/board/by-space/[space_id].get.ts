import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const space_id = await event.context.params.space_id;
    if (!space_id) return { error: "space_id is required" };

    const boards = await boardModel.find({ space: space_id }).populate("space");
    const data = boards.map((board) => {
      return {
        id: board._id,
        name: board.name,
        space: {
          id: board.space._id,
          name: board.space.name,
        },
        description: board.description,
        is_active: board.is_active,
        dataUnitsCount: board.dataUnits.length,
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
