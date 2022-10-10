import { boardModel } from './../../../schemas/board/Board';
import { businessModel } from './../../../schemas/business/Business';
import { spaceModel } from "~~/schemas/space/Space";
import { dataUnitModel } from "~~/schemas/dataUnit/DataUnit";
import { sendError } from "h3";

export default defineEventHandler(async (event) => {
    try{
        const board_id = await event.context.params.board_id;
        if(!board_id) return { error: "board_id is required" };

        const board = await boardModel.find({ _id: board_id }).populate({ path: 'space', model: spaceModel }).populate({ path: 'dataUnits', model: dataUnitModel });
        const data = board.map((board) => {
            return {
                id: board._id,
                name: board.name,
                space: {
                    id: board.space._id,
                    name: board.space.name,
                },
                description: board.description,
                is_active: board.is_active,
                dataUnits: board.dataUnits.map((dataUnit) => {
                    return {
                        id: dataUnit._id,
                        name: dataUnit.name,
                    }
                }),
                dataUnitsCount: board.dataUnits.length,
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