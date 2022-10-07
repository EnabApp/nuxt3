import { businessModel } from "../../../schemas/business"

export default defineEventHandler(async (event) => {

    try {
        const business = await businessModel.find();
        return business;
    } catch (err) {
        console.log(err);
    }
});
