import { spaceModel } from "../../../schemas/space"

export default defineEventHandler(async (event) => {
    try {
        const space = await spaceModel.find();
        return space;
    } catch (err) {
        console.log(err);
    }
});