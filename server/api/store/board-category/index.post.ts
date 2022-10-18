import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const {name, description} = await useBody(event);
    const {insertBoardCategory} = useBoardCategory();
    try {
        if (!name || !description){
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "name and description are required",
                })
            );
        };

        return await insertBoardCategory({name, description});
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
