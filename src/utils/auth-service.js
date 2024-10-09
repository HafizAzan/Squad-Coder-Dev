"use client";
export const LOCAL_STORAGE_KEYS = {
  TOKEN: "token",
  USERNAME: "username",
};

const setLocalStorageToken = (token) => {
  return localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
};

const setLocalStorageUser = (user) => {
  return localStorage.setItem(LOCAL_STORAGE_KEYS.USERNAME, user);
};

const getLocalStorageToken = () => {
  const token = localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
  if (token) return token;
  else return null;
};

const getLocalStorageUser = () => {
  const user = localStorage.getItem(LOCAL_STORAGE_KEYS.USERNAME);
  if (user) return user;
  else return null;
};

const removeLocalStorageToken = () => {
  const deleteValue = localStorage.removeItem(
    LOCAL_STORAGE_KEYS.TOKEN ?? LOCAL_STORAGE_KEYS.USERNAME
  );
  return deleteValue;
};

export const authService = {
  setLocalStorageToken,
  setLocalStorageUser,
  getLocalStorageToken,
  getLocalStorageUser,
  removeLocalStorageToken,
};
