import { spaceModel } from "~~/schemas/space/Space";

export default defineEventHandler(async (event) => {
    try {
        const spaces = await spaceModel.find().populate("business");
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

