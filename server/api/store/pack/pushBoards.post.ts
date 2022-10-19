import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { pack_id, boards } = await useBody(event);
    const { pushBoards } = usePack();
    try {
        if (!pack_id || !boards)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "pack_id and boards are required",
                })
            );

        return await pushBoards({ pack_id, boards });
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