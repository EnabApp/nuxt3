import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getBoards } = useBoard();
  try {
    return await getBoards();
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
