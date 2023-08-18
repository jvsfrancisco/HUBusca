import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "./../hooks/useLocalStorage";
import { UserType } from "./../types/UserType";

interface UserContextType {
  userData: UserType | null;
  setUserData: React.Dispatch<React.SetStateAction<UserType | null>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { storedValue: userData, setValue: setUserData } = useLocalStorage<UserType | null>("userData", null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}


export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export default UserContext;
