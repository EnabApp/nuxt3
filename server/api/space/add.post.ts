import { spaceModel } from "../../../schemas/Space/Space";

export default defineEventHandler(async (event) => {
    const { name, businessId } = await useBody(event);
    
    try {
        const space = new spaceModel({
            name: name,
            business: businessId,
        });
        await space.save();
        return space;
    } catch (err) {
        console.log(err);
    }
});