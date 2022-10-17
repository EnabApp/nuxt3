import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const {name, points, boards, is_active} = await useBody(event);
    const {insertPack} = usePack();
    try {
        if (!name || !points)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "name and points are required",
                })
            );

        return await insertPack({name, points, boards, is_active});
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