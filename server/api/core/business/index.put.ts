import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { id, name, address, user_id, category_id } = await useBody(event);
  const { updateBusiness } = useBusiness();
  if (!id || !name || !address || !user_id || !category_id)
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Invalid params",
      })
    );

  try {
    return await updateBusiness({ id, name, address, user_id, category_id });
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
