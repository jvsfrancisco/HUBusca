import { useAsync } from "../useAsync";

import * as userApi from "./../../services/userApi.ts";

export default function useSearchUser() {
  const {
    data: userData,
    error: userError,
    loading: userLoading,
    act: searchUser,
  } = useAsync(userApi.getUserByUsername, false);
  return {
    userData,
    userError,
    userLoading,
    searchUser,
  };
}
