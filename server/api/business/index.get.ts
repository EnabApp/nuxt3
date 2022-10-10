import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const businesses = await (await businessModel.find({}).populate("category"));
        const data = businesses.map((business) => {
            return {
                id: business._id,
                name: business.name,
                user: {
                    id: business.users[0].user_id,
                    permissions: business.users[0].Permissions,
                },
                address: business.address,
                category: business.category.name,
                is_active: business.is_active,
            };
        });
        return { data };
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