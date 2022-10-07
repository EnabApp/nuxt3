import { businessModel } from "../../../schemas/business";

export default defineEventHandler(async (event) => {
  const { name } = await useBody(event);
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
