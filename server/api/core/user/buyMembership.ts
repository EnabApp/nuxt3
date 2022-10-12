export default defineEventHandler(async (event) => {

    const {buyMembership} = useUserProfile();
    try {
        const { user_id, expirtion_date } = await useBody(event);
        if (!user_id) return { error: "user_id is required" };
        if (!expirtion_date) return { error: "expirtion_date is required" };
        return await buyMembership({ user_id, expirtion_date });
    }
    catch (err) {
        sendError(event, createError({
            statusCode: 400,
            statusMessage: err.message,
        }));
    }
});