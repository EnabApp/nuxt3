import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
  const { _id ,name  } = await useBody(event);
  try {
    const business = new businessModel({
      id: _id,
      name: name,
      user: "5f9f1b9b9c9d4b0b8c8b8b8b",
    });
    await business.save();
    return business;
  } catch (err) {
    console.log(err.message);
  }
});
