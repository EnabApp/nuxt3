import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { getBoardCategories } = useBoardCategory();
    try {
        return await getBoardCategories();
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