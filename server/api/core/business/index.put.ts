import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    const { id, name, address, users, categories, spaces, is_active } = await useBody(event);
    const { updateBusiness } = useBusiness();
    try {
        if (!id || !name || !address || !users || !categories || !spaces || !is_active)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "id, name, address, users, categories, spaces, is_active required",
                })
            );
        return await updateBusiness({ id, name, address, users, categories, spaces, is_active });
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