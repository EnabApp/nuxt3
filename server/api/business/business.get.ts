import { businessModel } from "../../../schemas/Business"

export default defineEventHandler(async (event) => {

    try {
        const business = await businessModel.find();
        return business;
    } catch (err) {
        console.log(err);
    }
});
