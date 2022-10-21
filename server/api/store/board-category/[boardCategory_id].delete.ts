import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try{
        const boardCategory_id = await event.context.params.boardCategory_id;
        if (!boardCategory_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "boardCategory_id is required"
            }))
        }
        const { deleteBoardCategory } = useBoardCategory();
        return await deleteBoardCategory(boardCategory_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});