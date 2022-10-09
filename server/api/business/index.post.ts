import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
    try {
        const { name, user_id, category_id, address } = await useBody(event);
        if (!name) return { error: "name is required" };
        if (!user_id) return { error: "user_id is required" };

        const business = new businessModel({
            name: name,
            users: [
                {
                    user_id: user_id,
                    Permissions: [
                        "admin"
                    ],
                },
            ],
            category: category_id,
            address: address
        });
        await business.save();
        return business;
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
