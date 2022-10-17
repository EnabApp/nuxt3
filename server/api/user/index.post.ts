import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { user, name } = await useBody(event);
  const { insertUser } = useUser();

  //check if user is not null
  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "User is required",
      })
    );
  }

  //Create a new user in MongoDB
  try {
    return await insertUser(user, name);
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
