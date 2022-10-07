import { businessModel } from "../../../schemas/business"
import { conn, mongoose } from "../../../composables/server/useDB"

export default defineEventHandler(async (event) => {

  const { name } = await useBody(event)
  await conn 
  try {
    const business = new businessModel({
      name: name,
    });

  await business.save();
    return business;
  } catch (err) {
    console.log(err);
  }
});
