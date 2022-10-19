import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try{
        const { boardCategory_id, board_id } = await useBody(event);
        if (!boardCategory_id || !board_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "boardCategory_id, board_id is required"
            }))
        }
        const { pullBoardsFromBoardCategory } = useBoardCategory();
        return await pullBoardsFromBoardCategory(boardCategory_id, board_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});