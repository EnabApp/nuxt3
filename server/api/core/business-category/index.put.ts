import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { id, name, description } = await useBody(event);
    const { updateBusinessCategory } = useBusiness();
    try {
        if (!id || !name)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "Invalid params",
                })
            );
        return await updateBusinessCategory({ id, name, description });
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