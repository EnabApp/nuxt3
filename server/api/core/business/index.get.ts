import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getBusiness } = useBusiness();
  try {
    const business = await getBusiness();
    return { business };
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
