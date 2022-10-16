export default () => {
  const userRefactor = (user) => {
    return {
      id: user._id,
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
      email: user._profile.data.email,
      state: user.state,
    };
  };
  const businessRefactor = (business) => {
    return {
      id: business._id,
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
      id: space._id,
      name: space?.name,
      business: space?.business,
      description: space?.description,
      is_active: space?.is_active,
      createdAt: space?.createdAt,
      updatedAt: space?.updatedAt,
      boardsCount: space?.boards?.length,
    };
  };

  const boardRefactor = (board) => {
    return {
      id: board._id,
      name: board.name,
      space: board.space,
      description: board.description,
      is_active: board.is_active,
      createdAt: board.createdAt,
      updatedAt: board.updatedAt,
    };
  };

  //Return Function to be used
  return {
    userRefactor,
    businessRefactor,
    spaceRefactor,
    boardRefactor,
    businessCategoryRefactor,
  };
};
