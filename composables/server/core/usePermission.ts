import { sendError } from "h3";
export default () => {
    // insert permission
    const insertPermission = ({ business_id, type_id, ref, type }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = new permissionModel({
                    business_id: business_id,
                    type_id: type_id,
                    ref: ref,
                    type: type,
                });
                await data.save();
                resolve(permissionRefactor(data));
            } catch (err) {
                reject(err);
            }
        });
    };
    return {
        insertPermission,
      };
};