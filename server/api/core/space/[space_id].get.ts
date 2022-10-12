import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { getSpaceById } = useSpace();
  const space_id = await event.context.params.space_id;
  try {
    if (!space_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }
    const space = await getSpaceById(space_id);
    return space;

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
