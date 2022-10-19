import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    const { getAllPacks } = usePack();
    try {
        const pack = await getAllPacks();
        return pack;
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