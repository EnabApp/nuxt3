export default defineEventHandler(async (event) => {
  try{
    const space_id = await event.context.params.space_id;
    if (!space_id) return { error: "space_id is required" };

    const { getSpaceById } = useSpace();
    const space = await getSpaceById(space_id);
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
