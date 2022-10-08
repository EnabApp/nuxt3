import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
  const { name, userId } = await useBody(event);
  
  try {
    const business = new businessModel({
      name: name,
      user: userId,
    });
    await business.save();
    return business;
  } catch (err) {
    console.log(err);
  }
});
