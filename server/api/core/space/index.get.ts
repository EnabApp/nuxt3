import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getSpace } = useSpace();
  try {
    const space = await getSpace();
    return { space };
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
