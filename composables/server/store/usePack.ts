import { packModel } from "~/schemas/store/pack/pack";
export default () => {

    // Export Function to be used
    const insertPack = ({ name, points, boards, is_active }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = new packModel({
                    name: name,
                    points: points,
                    boards: boards,
                    is_active: is_active,
                });

                await pack.save();
                resolve(packRefactor(pack));
            } catch (err) {
                reject(err);
            }
        });
    };

    //push boards into pack
    const pushBoards = ({ pack_id, boards }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.findById(pack_id);
                if (!pack) {
                    reject("Pack not found");
                }
                pack.boards = [...pack.boards, ...boards];
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
        pushBoards,
    };
}
