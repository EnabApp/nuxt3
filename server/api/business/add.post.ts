import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
  const { name, _id } = await useBody(event);
  try {
    const business = new businessModel({
      _id: _id,
      name: name,
    });
    await business.save();
    return business;
  } catch (err) {
    console.log(err);
  }
});
