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

  const spaceRefactor = (space) => {
    return {
      id: space.id,
      name: space.name,
      business: space.business,
      description: space.description,
      is_active: space.is_active,
      createdAt: space.createdAt,
      updatedAt: space.updatedAt,
    };
  };

  //Return Function to be used
  return {
    userRefactor,
    businessRefactor,
    spaceRefactor,
  };
};
