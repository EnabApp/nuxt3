export default () => {
    const buyMembership = ({ user_id, expirtion_date }) => {
        return new Promise(async (resolve, reject) => {
            try {
                // check if user exists
                const user = await userModel.findById(user_id);
                if (!user) {
                    reject("User not found");
                }
                resolve(user);
                
            } catch (err) {
                reject(err);
            }

            //Return Function to be used
            return {
                buyMembership,
            };
        });
    };
};
