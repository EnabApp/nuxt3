import { sendError } from "h3";
export default defineEventHandler(async (event) => {
  try {
    const { name, user_id, category_id, address } = await useBody(event);
    if (!name || !user_id) {
      return sendError(
        event,
        createError({
          statusCode: 400,
          statusMessage: "Invalid params",
        })
      );
    }
    const { insertBusiness } = useBusiness();
    const business = await insertBusiness({
      name,
      user_id,
      category_id,
      address,
    });
    return { business };

    // const  business = useBusiness();
    
    // const data = await business.insert({ name, user_id, category_id, address });

    // return data

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
