import { sendError } from "h3";
export default () => {
    // insert permission
    const insertPermission = ({ business_id, client_id, ref, type }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = new permissionModel({
                    business_id: business_id,
                    client: client_id,
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
    // get permission
    const getPermissions = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await permissionModel.find({});
                resolve(data.map((item) => permissionRefactor(item)));
            } catch (err) {
                reject(err);
            }
        });
    };
    // get permission by business_id
    const getPermissionsByBusinessId = (business_id) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await permissionModel.find({ business_id: business_id });
                resolve(data.map((item) => permissionRefactor(item)));
            } catch (err) {
                reject(err);
            }
        });
    };
    // get permission by client
    const getPermissionsByClient = (client) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await permissionModel.find({ client: client });
                resolve(data.map((item) => permissionRefactor(item)));
            } catch (err) {
                reject(err);
            }
        });
    };
    // update permission
    const updatePermission = ({ id, business_id, client, ref, type }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await permissionModel.findOneAndUpdate(
                    { _id: id },
                    {
                        business_id: business_id,
                        client: client,
                        ref: ref,
                        type: type,
                    },
                    { new: true }
                );
                resolve(permissionRefactor(data));
            } catch (err) {
                reject(err);
            }
        });
    };
    // delete permission
    const deletePermission = (id) => {
        return new Promise(async (resolve, reject) => {
            try {
                await permissionModel.findOneAndDelete({ _id: id });
                resolve("Permission deleted");
            } catch (err) {
                reject(err);
            }
        });
    };
    // Export Function to be used
        return {
        insertPermission,
        getPermissions,
        getPermissionsByBusinessId,
        getPermissionsByClient,
        updatePermission,
        deletePermission,
    };
};