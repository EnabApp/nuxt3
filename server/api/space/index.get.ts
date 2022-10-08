import { spaceModel } from "~~/schemas/space/Space";

export default defineEventHandler(async () => {
    try {
        const spaces = await spaceModel.find();
        return spaces;
    }
    catch (err) {
        console.log(err.message);
    }
});

