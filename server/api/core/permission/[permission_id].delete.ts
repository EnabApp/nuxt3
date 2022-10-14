import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { deletePermission } = usePermission();
    const permission_id = await event.context.params.permission_id;
    try {
        if (!permission_id)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "permission_id required",
                })
            );

        return await deletePermission(permission_id);
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