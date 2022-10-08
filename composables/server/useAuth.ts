import { app, Realm } from "./useRealm";

export default () => {
  const register = ({ email, password , name, number }) => {
    return new Promise(async (resolve, reject) => {
      try {
        //Create a new email/password account
        await app.emailPasswordAuth.registerUser({
          email,
          password,
          name,
          number,
        });

        //Log the user in
        const user = await app.logIn(
          Realm.Credentials.emailPassword(email, password)
        );

        resolve(true);
      } catch (err) {
        return reject(err);
        reject(err);
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

  async function loginWithGoogle(setAuthState: any) {
    const RedirectUri = "http://localhost:3000/redirect";
    const credentials = Realm.Credentials.google(RedirectUri);
    app.logIn(credentials).then((user) => {
      setAuthState({
        isLoggedIn: true,
        currentUser: user,
      });
      console.log("signed in successfully with id:" + user.id);
    });
  }

  //Return Function to be used
  return {
    register,
    login,
    loginWithGoogle,
  };
};
