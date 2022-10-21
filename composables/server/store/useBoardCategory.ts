export default () => {
    // insert board category
    const insertBoardCategory = ({ name, description }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategory = new boardCategoryModel({
                    name,
                    description,
                });
                await boardCategory.save();
                resolve(boardCategoryRefactor(boardCategory));
            } catch (err) {
                reject(err);
            }
        });
    };
    // get board categories
    const getBoardCategories = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategories = await boardCategoryModel.find({}).select("_id name description");
                resolve(boardCategories.map((boardCategory) => boardCategoryRefactor(boardCategory)));
            } catch (err) {
                reject(err);
            }
        });
    };
    // get board category by id
    const getBoardCategoryById = (boardCategory_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategory = await boardCategoryModel.findOne({ _id: boardCategory_id }).populate("boards", "id name").select("_id name description");
                resolve(boardCategoryRefactor(boardCategory));
            } catch (err) {
                reject(err);
            }
        });
    };
    // update board category
    const updateBoardCategory = (boardCategory_id, { name, description }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategory = await boardCategoryModel.findByIdAndUpdate(boardCategory_id, {
                    name,
                    description,
                }, { new: true });
                resolve(boardCategoryRefactor(boardCategory));
            } catch (err) {
                reject(err);
            }
        });
    };
    // delete board category
    const deleteBoardCategory = (boardCategory_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                await boardCategoryModel.findByIdAndDelete(boardCategory_id);
                resolve("Board category deleted");
            } catch (err) {
                reject(err);
            }
        });
    };
    // push boards to board category
    const pushBoardsToBoardCategory = (boardCategory_id, board_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategory = await boardCategoryModel.findByIdAndUpdate(boardCategory_id, {
                    $push: {
                        boards: board_id,
                    },
                }, { new: true });
                resolve(boardCategoryRefactor(boardCategory));
            } catch (err) {
                reject(err);
            }
        });
    };
    // pull boards from board category
    const pullBoardsFromBoardCategory = (boardCategory_id, board_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const boardCategory = await boardCategoryModel.findByIdAndUpdate(boardCategory_id, {
                    $pull: {
                        boards: board_id,
                    },
                }, { new: true });
                resolve(boardCategoryRefactor(boardCategory));
            } catch (err) {
                reject(err);
            }
        });
    };
    
    //Return Function to be used
    return {
        insertBoardCategory,
        getBoardCategories,
        getBoardCategoryById,
        updateBoardCategory,
        deleteBoardCategory,
        pushBoardsToBoardCategory,
        pullBoardsFromBoardCategory,
    };
};
