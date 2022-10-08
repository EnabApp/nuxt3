import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
    try {
        const { name, user_id } = await useBody(event);
        const business = new businessModel({
            name,
            user_id
        });
        await business.save();
        return business;
    }
    catch (err) {
        console.log(err.message);
    }
});