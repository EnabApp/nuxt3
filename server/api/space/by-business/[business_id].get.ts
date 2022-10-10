import { spaceModel } from "~~/schemas/space/Space";

export default defineEventHandler(async (event) => {
    try {
        const business_id = await event.context.params.business_id;

        if(!business_id) return { error: "business_id is required" };
        
        const spaces = await spaceModel.find({ business: business_id }).populate("business");
        const data = spaces.map((space) => {
            return {
                id: space._id,
                name: space.name,
                business: {
                    id: space.business._id,
                    name: space.business.name,
                },
                description: space.description,
                is_active: space.is_active,
                boardsCount: space.boards.length,
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