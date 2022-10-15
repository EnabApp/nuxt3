import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    try {
        const category_id = await event.context.params.category_id;
        if (!category_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { deleteCategory } = useBusiness();
        return await deleteCategory(category_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});
