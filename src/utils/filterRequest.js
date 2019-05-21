const filterRejectRequest = (userRequests, userId) => {
  const rejectRequest = userRequests.filter(
    request => request.user_id !== userId
  );
  return rejectRequest;
};

export default filterRejectRequest;
