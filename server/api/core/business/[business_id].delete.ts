import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    try {
        const business_id = await event.context.params.business_id;
        if (!business_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { deleteBusiness } = useBusiness();
        return await deleteBusiness(business_id);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});