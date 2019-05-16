const filterFollowing = (userFollowing, unFollowedUser) => {
  const newFollowing = userFollowing.filter(
    following => following.followee_id !== unFollowedUser
  );
  return newFollowing;
};

export default filterFollowing;
