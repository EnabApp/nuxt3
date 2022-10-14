import { app, Realm } from "./useRealm";

export default () => {
  const { userRefactor } = useRefactor();
  const register = ({ email, password, name }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Create a new email/password account
        await app.emailPasswordAuth.registerUser({
          email,
          password,
        });

        //Log the user in
        const data = await app.logIn(
          Realm.Credentials.emailPassword(email, password)
        );

        // Create a new User
        const user = new userModel({
          _id: app.currentUser.id,
          email: email,
          name: name,
        });

        // Create a new Profile
        const profile = new profileModel({
          user: app.currentUser.id,
        });
        await profile.save();
        user.profile = profile._id;
        await user.save();

        resolve(userRefactor(data));
      } catch (err) {
        return reject(err);
      }
    });
  };

  const login = ({ email, password }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Log the user in
        const user = await app.logIn(
          Realm.Credentials.emailPassword(email, password)
        );

        resolve(userRefactor(user));
      } catch (err) {
        reject(err);
      }
    });
  };

  async function logout() {
    await app.currentUser.logOut();
  }

  //Return Function to be used
  return {
    register,
    login,
    logout,
  };
};
