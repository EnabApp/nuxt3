import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { user } = useBody(event);
  const { insertUser } = useUser();
  try {
    if (!user) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }
    const user = await insertUser(user);
    return user;
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
