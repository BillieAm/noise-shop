import { createContext, ReactNode, useState } from "react";

import { UserContextType } from "../types/shop";

const UserContext = createContext<UserContextType>({
  currentUser: null,
  setCurrentUser: () => null
});

function UserProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
