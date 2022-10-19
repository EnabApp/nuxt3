export default () => {
    // buy board method
    const buyBoard = ({ board_id, user_id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const board = await boardModel.find(_id:board_id);
                if (!board) {
                    reject("Board not found");
                }
                const user = await userModel.find(_id:user_id);
                if (!user) {
                    reject("User not found");
                }
                user.boards.push(board);
                await user.save();
                resolve(userRefactor(user));
            } catch (err) {
                reject(err);
            }
        });
    };
    // buy pack method
    const buyPack = ({ pack_id, user_id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.find(_id:pack_id);
                if (!pack) {
                    reject("Pack not found");
                }
                const user = await userModel.find(_id:user_id);
                if (!user) {
                    reject("User not found");
                }
                user.packs.push(pack);
                await user.save();
                resolve(userRefactor(user));
            } catch (err) {
                reject(err);
            }
        });
    };
    // buy membership method
    const buyMembership = ({ membership_id, user_id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                // code
            } catch (err) {
                reject(err);
            }
        });
    };
    //Return Function to be used
    return {
        buyPack,
        buyBoard,
    };
}