import { businessModel } from "../../../schemas/business"
import { conn, mongoose } from "../../../composables/server/useDB"

export default defineEventHandler(async (event) => {

    await conn
    try {
        const business = await businessModel.find();
        return business;
    } catch (err) {
        console.log(err);
    }
});
