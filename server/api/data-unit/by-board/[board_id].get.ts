import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  try {
    const board_id = await event.context.params.board_id;
    if (!board_id) return { error: "board_id is required" };
    const dataUnits = await dataUnitModel.find({ board: board_id });
    const data = dataUnits.map((dataUnit) => {
      return {
        id: dataUnit._id,
        name: dataUnit.name,
        points: dataUnit.points,
        board: {
          id: dataUnit.board._id,
          name: dataUnit.board.name,
        },
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
