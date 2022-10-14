import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    //ubdate business
    try {
        const business_id = await event.context.params.business_id;
        return business_id;
        if (!business_id) {
            return sendError(event, createError({
                statusCode: 400,
                statusMessage: "Invalid params"
            }))
        }
        const { updateBusiness } = useBusiness();
        return await updateBusiness(business_id, event.body);
    }
    catch (err) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message
        }))
    }
});