import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({
    fullname: null,
    data: null,
    token: null,
    check: false,
    ispremium: false,
    whois: null,
    status: false,
  });

  const [option, setOption] = useState({
    created: false,
    medium: 0
  });

  return (
    <UserContext.Provider value={[user, setUser, option, setOption]}>
      {props.children}
    </UserContext.Provider>
  );
};
