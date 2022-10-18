import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { id, name, space_id, points, description, desktopUnits, tabletUnits, mobileUnits, category_id, packages } = await useBody(event);
    const { updateBoard } = useBoard();
    try {
        if (!name || !space_id || !points || !category_id) {
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "params missing",
                })
            );
        };

        return await updateBoard({ id, name, space_id, points, description, desktopUnits, tabletUnits, mobileUnits, category_id, packages });
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