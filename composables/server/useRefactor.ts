export default () => {
  const userRefactor = (user) => {
    return {
      id: user.id,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      email: user._profile.data.email,
      state: user.state,
    };
  };
  //Return Function to be used
  return {
    userRefactor,
  };
};
