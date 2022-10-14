import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try{
        const board_id = await event.context.params.board_id;
        if (!board_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { deleteBoard } = useBoard();
        return await deleteBoard(board_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});
