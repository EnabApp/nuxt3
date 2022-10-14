import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const board_id = await event.context.params.board_id;
  const { getBoardById } = useBoard();

  try {
    return await getBoardById(board_id);
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
