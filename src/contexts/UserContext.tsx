import { createContext, useContext, useState } from "react";
import { Card } from "../interfaces/Card";
import { User } from "../interfaces/User";

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[]>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UserContextProps | null>(null);

const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cards, setCards] = useState<Card[]>([]);

  return (
    <UserContext.Provider value={{ user, setUser, cards, setCards }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser, UserContext };
