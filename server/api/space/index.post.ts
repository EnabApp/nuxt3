export default defineEventHandler(async (event) => {
    try {
        const { name, business_id } = await useBody(event);
        if(!name) return { error: "name is required" };
        if(!business_id) return { error: "business_id is required" };
        
        const space = new spaceModel({
            name,
            business_id
        });
        await space.save();
        return space;
    }
    catch (err) {
        console.log(err.message);
    }
});