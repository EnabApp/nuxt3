import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { name } = await useBody(event);
  const { insertBusinessCategory } = useBusiness();
  try {
    if (!name)
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "name  required",
        })
      );

    return await insertBusinessCategory({ name });
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
