import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    try {
        const pack_id = await event.context.params.pack_id;
        if (!pack_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { deletePack } = usePack();
        return await deletePack(pack_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});
