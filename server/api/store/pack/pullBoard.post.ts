import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { pack_id, board } = await useBody(event);
    const { pullBoard } = usePack();
    try {
        if (!pack_id || !board)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "pack_id and board are required",
                })
            );

        return await pullBoard({ pack_id, board });
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
