"use client";

import React, { createContext, useContext } from "react";
import { authService } from "utils/auth-service";

const AuthenticationContext = createContext();
const AppContext = ({ children }) => {
  const onLogin = async (data) => {
    const { data } = data;
    await authService.setLocalStorageToken(data?.token);
    await authService.setLocalStorageUser(data?.username);
  };

  const onLogout = async () => {
    await authService.removeLocalStorageToken();
  };

  return (
    <AuthenticationContext.Provider value={{ onLogin, onLogout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AppContext;
export const useAuthenticatedContext = () => useContext(AuthenticationContext);
