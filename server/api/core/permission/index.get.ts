import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { getPermissions } = usePermission();
    try {
        return await getPermissions();
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