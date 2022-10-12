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
      categories: business.categories.map((category) => {
        return {
          id: category.id,
          name: category.name,
        };
      }),
      user: {
        id: business.users[0].user_id,
        permissions: business.users[0].Permissions,
      },
      spacesCount: business.spaces.length,
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
