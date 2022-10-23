import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const ContextProvider = ({ children }) => {
  const authInfo = { user: "ak" };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProvider;
