export default defineEventHandler(async (event) => {
  try {
    const { name, business_id, description } = await useBody(event);
    if (!name || !business_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }

  const { inserSpace } = useSpace();
  const space = await inserSpace({
    name,
    business_id,
    description,
  });
  
  return { space };

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
