export default () => {
    // buy board method
    const buyBoard = (date) => {
        const { board_id, user_id } = date;
        return new Promise(async (resolve, reject) => {
            try {
                const board = await boardModel.find({_id:board_id});
                if (!board) {
                    reject("Board not found");
                }
                const user = await userModel.findByIdAndUpdate(user_id, {
                    $push: { boards: board_id },
                    }, { new: true });
                if (!user) {
                    reject("User not found");
                }
                resolve(userRefactor(user));
            } catch (err) {
                reject(err);
            }
        });
    };
    // // buy pack method
    // const buyPack = ({ pack_id, user_id }) => {
    //     return 'kdf';
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const pack = await packModel.find(_id:pack_id);
    //             if (!pack) {
    //                 reject("Pack not found");
    //             }
    //             const user = await userModel.find(_id:user_id);
    //             if (!user) {
    //                 reject("User not found");
    //             }
    //             user.packs.push(pack);
    //             await user.save();
    //             resolve(userRefactor(user));
    //         } catch (err) {
    //             reject(err);
    //         }
    //     });
    // };
    // // buy membership method
    // const buyMembership = ({ membership_id, user_id }) => {
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             // code
    //         } catch (err) {
    //             reject(err);
    //         }
    //     });
    // };
    //Return Function to be used
    return {
        // buyPack,
        buyBoard,
    };
}