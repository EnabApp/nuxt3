import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    try {
        const { id, name, business_id, description } = await useBody(event);
        const { updateSpace } = useSpace();
        if (!name || !business_id) {
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "Invalid params",
                })
            );
        }
        return await updateSpace({
            id,
            name,
            business_id,
            description,
        });
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
