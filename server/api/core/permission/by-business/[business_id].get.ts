import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const business_id = await event.context.params.business_id;
    const { getPermissionsByBusinessId } = usePermission();
    try {
        if (!business_id)
        return sendError(
            event,
            createError({
            statusCode: 400,
            statusMessage: "business_id required",
            })
        );
    
        return await getPermissionsByBusinessId(business_id);
    } catch (err) {
        return sendError(
        event,
        createError({
            statusCode: 400,
            statusMessage: err.message,
        })
        );
    }
    }
);