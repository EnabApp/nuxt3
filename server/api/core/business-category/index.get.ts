import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const { getBusinessCategories } = useBusiness();
  try {
    return await getBusinessCategories();
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
