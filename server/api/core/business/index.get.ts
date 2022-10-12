import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getBusinesses } = useBusiness();
  try {
    const businesses = await getBusinesses();
    return { businesses };
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
