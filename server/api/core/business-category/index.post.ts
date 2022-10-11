export default defineEventHandler(async (event) => {
  try {
    const { name } = await useBody(event);
    if (!name) return { error: "name is required" };
    const businessCategory = new businessCategoryModel({
      name: name,
    });
    await businessCategory.save();
    return businessCategory;
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
