import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const {pack_id, user_id} = await useBody(event);
    const { buyPack } = useSales();
    try {
        if (!pack_id || !user_id)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "pack_id and user_id are required",
                })
            );
        return await buyPack({pack_id, user_id});
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
