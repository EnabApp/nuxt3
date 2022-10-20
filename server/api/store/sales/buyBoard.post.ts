import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const date = await useBody(event);
    const { buyBoard } = useSales();
    try {
        if (!date.board_id || !date.user_id)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "board_id and user_id are required",
                })
            );
        return await buyBoard(date);
    } 
    catch (err) {
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: err.message,
            })
        );
    }
});