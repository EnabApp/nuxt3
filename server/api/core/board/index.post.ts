import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { name, space_id, description } = await useBody(event);
  const { insertBoard } = useBoard();
  try {
    if (!name || !space_id)
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "name and space_id are required",
        })
      );

    return await insertBoard({ name, space_id, description });
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
