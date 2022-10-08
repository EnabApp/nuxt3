import { businessModel } from "../../../schemas/business/Business";

export default defineEventHandler(async (event) => {
    try{
        const businesses = await businessModel.find();
        return businesses;
    }
    catch(err)
    {
        console.log(err.message);
    }
});