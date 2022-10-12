import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  const { getSpaceByBusinessId } = useSpace();
  const business_id = await event.context.params.business_id;
  try {
    
    if (!business_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }

    const spaces = await getSpaceByBusinessId(business_id);
    return  spaces ;

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
