import { app, Realm } from "./useRealm";
import { profileModel } from "../../schemas/user/Profile";

export default () => {
  const register = ({ email, password, name, phonenumber }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Create a new email/password account
        await app.emailPasswordAuth.registerUser({
          email,
          password,
        });

        //Log the user in
        const user = await app.logIn(
          Realm.Credentials.emailPassword(email, password)
        );

        // Create a new profile
        // const userProfile = new profileModel({
        //   user_id: app.currentUser.id,
        //   name: name,
        //   phonenumber: phonenumber,
        // });

        // await userProfile.save();

        resolve({
          user: user,
          // profile: userProfile,
        });
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

        resolve(user);
      } catch (err) {
        reject(err);
      }
    });
  };

  async function loginWithGoogle(response) {
    const credentials = Realm.Credentials.google(response.credential);
    app
      .logIn(credentials)
      .then((user) => {
        return user;
      })
      .catch((err) => {
        throw err;
      });
  }

  async function logout() {
    await app.currentUser.logOut();
  }

  //Return Function to be used
  return {
    register,
    login,
    loginWithGoogle,
    logout,
  };
};
