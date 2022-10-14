import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { id, business_id, client, ref, type } = await useBody(event);
    const { updatePermission } = usePermission();
    try {
        if (!id || !business_id || !client || !ref || !type)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "id, business_id, client, ref, type required",
                })
            );

        return await updatePermission({ id, business_id, client, ref, type });
    } catch (err) {
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: err.message,
            })
        );
    }
});