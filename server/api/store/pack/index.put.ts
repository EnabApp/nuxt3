import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { pack_id, name, points, boards } = await useBody(event);
    const { updatePack } = usePack();
    try {
        if (!pack_id || !name || !points)  {
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "params missing",
                })
            );
        };

        return await updatePack({ pack_id, name, points, boards });
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