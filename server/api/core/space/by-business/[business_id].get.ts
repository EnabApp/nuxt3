export default defineEventHandler(async (event) => {
  try {

    const business_id = await event.context.params.business_id;
    if (!business_id) return { error: "business_id is required" };

    const { getSpaceByBusinessId } = useSpace();
    const spaces = await getSpaceByBusinessId(business_id);
    return  spaces ;

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
