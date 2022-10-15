import { sendError } from "h3";

export default defineEventHandler(async (event) => {
  const {  business_id, client_id, ref, type } = await useBody(event);
  const { insertPermission } = usePermission();
  try {
    if (!business_id || !client_id || !ref || !type)
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: "business_id, client_id, ref, type required",
            })
        );

    return await insertPermission({ business_id, client_id, ref, type });
  } catch (err) {
    return sendError(
        event,
        createError({
            statusCode: 400,
            statusMessage: err.message,
        })
    );
    }
});
