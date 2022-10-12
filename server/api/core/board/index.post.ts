import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { insertBoard } = useBoard();

  const { name, space_id, description } = await useBody(event);
  try {
    if (!name || !space_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Missing Required Fields",
        })
      );
    }
    const board = await insertBoard({ name, space_id, description });
    return board;
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
