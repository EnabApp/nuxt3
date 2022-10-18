import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const { name, description } = await useBody(event);
        const { insertBoardCategory } = useBoardCategory();
        if (!name ) {
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "name are required",
                })
            );
        };

        return await insertBoardCategory({ name, description });
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
