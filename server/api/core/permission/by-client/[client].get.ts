import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const client = await event.context.params.client;
    const { getPermissionsByClient } = usePermission();
    try {
        if (!client)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "client required",
                })
            );

        return await getPermissionsByClient(client);
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