import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try{
        const { id, name, description } = await useBody(event);
        const { updateBoardCategory } = useBoardCategory();
        if (!id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "id is required"
            }))
        }
        return await updateBoardCategory(id, { name, description });
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});