export default () => {
    // buy board method
    // const buyBoard = (date) => {
    //     const { board_id, user_id } = date;
    //     return new Promise(async (resolve, reject) => {
    //         try {
    //             const board = await boardModel.find({_id:board_id});
    //             if (!board) {
    //                 reject("Board not found");
    //             }
                
    //             const user = await userModel.findByIdAndUpdate(user_id, {
    //                 $push: { boards: board_id },
    //                 }, { new: true });
    //             if (!user) {
    //                 reject("User not found");
    //             }
    //             resolve(userRefactor(user));
    //         } catch (err) {
    //             reject(err);
    //         }
    //     });
    // };

    //buy board method
const buyBoard = (date) => {
    const { board_id, user_id} = date;
    return new Promise(async (resolve, reject) => {
        try{
        
            const board = await boardModel.find({_id:board_id});
            if (!board) {
                reject("Board not found");
            }

            const user = await userModel.find({_id:user_id});
            if (!user) {
                reject("User not found");
            }

            //if user already have the board
            if(user.boards.find(({board}) => board == board_id)){
                reject("User already have this board");
            }

            //get userPoints from profile
            const profile = await profileModel.findOne({user: user_id});
            const userPoints = profile.points;
            
            //get boardPoints
            const boardPoints = board.points;

            //cut points from user if has enough points
            if(userPoints >= boardPoints)
            {
                profile.points -= boardPoints;
                await profile.save();
            }
            else {
                reject("User has not enough points");
            }

            //push board to user 
            user.boards.push({
                board: board._id
            });

            await user.save();
            resolve("Board bought");

        } catch (err)
        {
            reject(err);
        }
    });
};


    // buy pack method
    const buyPack = ({ pack_id, user_id }) => {
        
        return new Promise(async (resolve, reject) => {
            try {
                const pack = await packModel.find({_id:pack_id});
                if (!pack) {
                    reject("Pack not found");
                }
                const user = await userModel.find({_id:user_id});
                if (!user) {
                    reject("User not found");
                }

                //if user already have the pack
                if(user.packs.find(({pack}) => pack == pack_id)){
                    reject("User already have this pack");
                }
                
                //get userPoints from profile
                const profile = await profileModel.findOne({user: user_id});
                const userPoints = profile.points;

                //get packPoints
                const packPoints = pack.points;

                //cut points from user if has enough points
                if(userPoints >= packPoints)
                {
                    profile.points -= packPoints;
                    await profile.save();
                }
                else {
                    reject("User has not enough points");
                }

                //push pack to user
                user.packs.push({
                    pack: pack._id
                });

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