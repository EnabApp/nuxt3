import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getSpaces } = useSpace();
  try {
    const space = await getSpaces();
    return  space;
  }

  catch (err) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: err.message,
      })
    );
  }
});
