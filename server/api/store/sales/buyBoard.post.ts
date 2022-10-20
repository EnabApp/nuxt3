import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { board_id, user_id } = await useBody(event);
    const { buyBoard } = useSales();
    try {
        if (!board_id || !user_id)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "board_id and user_id are required",
                })
            );
        return await buyBoard({ board_id, user_id });
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