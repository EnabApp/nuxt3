export default defineEventHandler(async (event) => {
    try {
        const space_id = await event.context.params.space_id;
        if (!space_id) return { error: "space_id is required" };

        const space = await spaceModel.findOne({ _id: space_id })
            .populate({ path: 'business', model: businessModel })
            .populate({
                path: 'boards', model: boardModel, populate: [
                    { path: 'desktopUnits', model: UnitModel },
                    { path: 'tabletUnits', model: UnitModel },
                    { path: 'mobileUnits', model: UnitModel },
                ]
            });
        const data = {
            id: space._id,
            name: space.name,
            business: {
                id: space.business._id,
                name: space.business.name,
            },
            description: space.description,
            is_active: space.is_active,
            boards: space.boards.map((board) => {
                return {
                    id: board._id,
                    name: board.name,
                    is_active: board.is_active,
                    description: board.description,
                    units: {
                        desktop: board.desktopUnits,
                        tablet: board.tabletUnits,
                        mobile: board.mobileUnits,
                    }
                }
            }),
            boardsCount: space.boards.length,
        };
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
