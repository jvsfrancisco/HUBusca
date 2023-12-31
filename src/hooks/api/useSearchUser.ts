import { useAsync } from "../useAsync";

import * as userApi from "./../../services/userApi.ts";

export default function useSearchUser() {
  const getUser = async (username: string) => {
    return userApi.getUserByUsername(username); // Coloque o argumento aqui
  };

  const {
    data: userData,
    error: userError,
    loading: userLoading,
    act: searchUser,
  } = useAsync(getUser, false);
  return {
    userData,
    userError,
    userLoading,
    searchUser,
  };
}
