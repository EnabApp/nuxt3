import { sendError } from "h3";
export default defineEventHandler(async (event) => {
    const { getPackById } = usePack();
    const pack_id = await event.context.params.pack_id;
    try {
        if (!pack_id) {
            return sendError(
                event,
                createError({
                    statusCode: 400,
                    statusMessage: "Invalid params",
                })
            );
        }
        const pack = await getPackById(pack_id);
        return pack;
    } catch (err) {
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: err.message,
            })
        );
    }
}
);