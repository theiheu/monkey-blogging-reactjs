import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

function AuthProvider(props) {
  const [userInfor, setUserInfor] = useState([]);
  const value = { userInfor, setUserInfor };
  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useContext must be used within a AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
