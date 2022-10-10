import { businessCategoryModel } from './../../../schemas/business-categories/businessCategories';
import { businessModel } from './../../../schemas/business/Business';
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const businesses = await businessModel.find({}).populate({ path: 'categories', model: businessCategoryModel });
        const data = businesses.map((business) => {
            return {
                id: business._id,
                name: business.name,
                user: {
                    id: business.users[0].user_id,
                    permissions: business.users[0].Permissions,
                },
                address: business.address,
                categories: business.categories.map((category) => {
                    return {
                        id: category._id,
                        name: category.name,
                    }
                }),
                spacesCount: business.spaces.length,
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