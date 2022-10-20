export default () => {
    // buy board method
    const buyBoard = async ({ board_id, user_id }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const { getBoardById } = useBoard();
                const { getUserById } = useUser();
                const board = await getBoardById(board_id);
                const user = await getUserById(user_id);
                if (!board || !user) {
                    reject("Board or User not found");
                }
                //check if user already bought this board
                const userBoard = user.findOne({ 'boards.board': board });
                if (userBoard) {
                    reject("User already bought this board");
                }
                resolve(userBoard);
            }
            catch (err) {
                reject(err);
            }
        });
    };
    // buy pack method
    const buyPack = ({ pack_id, user_id }) => {

        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.find({ _id: pack_id });
                if (!pack) {
                    reject("Pack not found");
                }
                const user = await userModel.find({ _id: user_id });
                if (!user) {
                    reject("User not found");
                }

                //if user already have the pack
                if (user.packs.find(({ pack }) => pack == pack_id)) {
                    reject("User already have this pack");
                }

                //get userPoints from profile
                const profile = await profileModel.findOne({ user: user_id });
                const userPoints = profile.points;

                //get packPoints
                const packPoints = pack.points;

                //cut points from user if has enough points
                if (userPoints >= packPoints) {
                    profile.points -= packPoints;
                    await profile.save();
                }
                else {
                    reject("User has not enough points");
                }

                //push pack to user
                user.packs.findByIdAndUpdate(user_id, {
                    $push: { packs: pack_id },
                }, { new: true });


                await user.save();
                resolve("Pack bought");
            } catch (err) {
                reject(err);
            }
        });
    };
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
        buyPack,
    };
}