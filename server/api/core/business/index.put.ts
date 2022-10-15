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
                    statusMessage: "id, name, address, user_id, category_id",
                })
            );
        return await updateBusiness({ id, name, address, user_id, category_id });
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