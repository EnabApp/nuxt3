import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
    try {
        const { name, user_id } = await useBody(event);
        if(!name) return { error: "name is required" };
        if(!user_id) return { error: "user_id is required" };
        
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