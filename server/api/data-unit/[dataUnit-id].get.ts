import { dataUnitModel } from "~~/schemas/dataUnit/DataUnit";
import { boardModel } from './../../../schemas/board/Board';

import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try {
        const dataUnit_id = await event.context.params.dataUnit_id;
        return (dataUnit_id);
        if (!dataUnit_id) return { error: "dataUnit_id is required" };
        const dataUnit = await dataUnitModel.find({ _id: dataUnit_id }).populate({ path: 'board', model: boardModel });
        const data = dataUnit.map((dataUnit) => {
            return {
                id: dataUnit._id,
                name: dataUnit.name,
                points: dataUnit.points,
                board: {
                    id: dataUnit.board._id,
                    name: dataUnit.board.name,
                },
            };
        });
        return { data };
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

