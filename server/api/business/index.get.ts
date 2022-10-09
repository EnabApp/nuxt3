import { businessModel } from "../../../schemas/business/Business";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const businesses = await (await businessModel.find({}).populate("category"));
        return businesses;
    }
    catch (err) {
        return sendError(
            event,
            createError({
                statusCode: 400,
                statusMessage: err.message,
            })
        );
    }
});