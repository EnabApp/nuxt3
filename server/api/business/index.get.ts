import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async () => {
    try {
        const businesses = await businessModel.find();
        return businesses;
    }
    catch (err) {
        console.log(err.message);
    }
});