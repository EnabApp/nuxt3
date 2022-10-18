export default () => {

    const insertPack = ({ name, points, boards }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = new packModel({
                    name: name,
                    points: points,
                    boards: boards,
                });

                await pack.save();
                resolve(packRefactor(pack));
            } catch (err) {
                reject(err);
            }
        });
    };

    //push board into pack
    const pushBoard = ({ pack_id, board }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.findById(pack_id);
                if (!pack) {
                    reject("Pack not found");
                }
                pack.boards.push(board);
                await pack.save();
                resolve(packRefactor(pack));
            } catch (err) {
                reject(err);
            }
        });
    };

    const getPackById = (pack_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.findById(pack_id);
                if (!pack) {
                    reject("Pack not found");
                }
                resolve(packRefactor(pack));
            } catch (err) {
                reject(err);
            }
        });
    };


    //pull board from pack
    const pullBoardFromPack = ({ pack_id, board }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.findById(pack_id);
                if (!pack) {
                    reject("Pack not found");
                }
                pack.boards.pull(board);
                await pack.save();
                resolve(packRefactor(pack));
            } catch (err) {
                reject(err);
            }
        });
    };

    //Return Function to be used
    return {
        insertPack,
        pushBoard,
        getPackById,
        pullBoardFromPack,
    };
}
