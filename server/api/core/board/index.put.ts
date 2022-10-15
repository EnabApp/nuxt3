import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { id, name, space_id, description } = await useBody(event);
    const { updateBoard } = useBoard();
    try {
        if (!name || !space_id)
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "params missing",
            );

        return await updateBoard({ id, name, space_id, description });
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