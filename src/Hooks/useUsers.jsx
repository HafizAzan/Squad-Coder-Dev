"use client";
import { useQuery } from "react-query";
import { UserService } from "services/users-service";

const useUsers = () => {
  const {
    data: GetUserData,
    isLoading: userDataLoader,
    isFetching: userDataFetching,
    refetch: userRefetch,
  } = useQuery("users", () => UserService.getUser());

  return {
    GetUserData,
    userDataLoader,
    userDataFetching,
    userRefetch,
  };
};

export default useUsers;
