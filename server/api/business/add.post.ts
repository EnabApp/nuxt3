import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
  const { name, user } = await useBody(event);
  try {
    const business = new businessModel({
      name: name,
      user: user,
    });
    await business.save();
    return business;
  } catch (err) {
    console.log(err);
  }
});
