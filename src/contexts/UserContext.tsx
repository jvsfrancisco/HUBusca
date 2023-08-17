import { createContext } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { UserTypes } from "../types/UserTypes";

interface UserContextType {
  userData: UserTypes | null;
  setUserData: React.Dispatch<React.SetStateAction<UserTypes | null>>;
}

const UserContext = createContext<{
  userData: UserData | null;
  setUserData: React.Dispatch<React.SetStateAction<UserData | null>>;
}>({
  userData: null,
  setUserData: () => {},
});

export default UserContext;

export function UserProvider({ children } : UserContextType ) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
