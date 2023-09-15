import { createContext, useState } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfor, setUserInfor] = useState([]);
  const value = { userInfor, setUserInfor };
  return <AuthContext.Provider value={value} {...props} />;
}
