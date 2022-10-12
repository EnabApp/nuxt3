import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const { name, space_id, description } = await useBody(event);
        if(!name) return { error: "name is required" };
        if(!space_id) return { error: "space_id is required" };
        
        const board = new boardModel({
            name,
            space: space_id,
            description: description ,
            units: {
                desktop: [
                    

                ],
                tablet: [],
                mobile: [],
            },
        });
        await board.save();
        return board;
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
