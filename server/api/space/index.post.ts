import { spaceModel } from "~~/schemas/space/Space";

export default defineEventHandler(async (event) => {
    try {
        const { name, business_id, description } = await useBody(event);
        if(!name) return { error: "name is required" };
        if(!business_id) return { error: "business_id is required" };
        
        const space = new spaceModel({
            name,
            business: business_id,
            description: description ,
        });
        await space.save();
        return space;
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