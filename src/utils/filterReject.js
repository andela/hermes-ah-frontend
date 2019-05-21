const filterAcceptRequest = (userRequests, requestStatus) => {
  const acceptRequest = userRequests.filter(
    request => request.user_id !== requestStatus
  );
  return acceptRequest;
};

export default filterAcceptRequest;
