import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const { name, board_id, points } = await useBody(event);
        if (!name) return { error: "name is required" };
        if (!board_id) return { error: "board_id is required" };
        if (!points) return { error: "points is required" };
        const dataUnit = new dataUnitModel({
            name,
            board: board_id,
            points,
        });
        await dataUnit.save();
        return dataUnit;
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

