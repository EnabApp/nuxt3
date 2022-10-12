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
  const businessRefactor = (business) => {
    return {
      id: business.id,
      name: business.name,
      address: business.address,
      categories: business.categories,
      user: business.users,
      spaces: business.spaces,
      is_active: business.is_active,
      createdAt: business.createdAt,
      updatedAt: business.updatedAt,
    };
  };
  //Return Function to be used
  return {
    userRefactor,
    businessRefactor,
  };
};
