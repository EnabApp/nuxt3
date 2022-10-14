import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    try {
        const space_id = await event.context.params.space_id;
        if (!space_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { deleteSpace } = useSpace();
        return await deleteSpace(space_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});