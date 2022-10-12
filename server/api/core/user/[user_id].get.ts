import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { getUserById } = useUser();
  const user_id = await event.context.params.user_id;
  try {
    if (!user_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }

    return await getUserById(user_id);
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
