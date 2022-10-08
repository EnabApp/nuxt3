import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
  const {id, name } = await useBody(event);
  try {
    const business = new businessModel({
      id: id,
      name: name,
    });
    await business.save();
    return business;
  } catch (err) {
    console.log(err);
  }
});
