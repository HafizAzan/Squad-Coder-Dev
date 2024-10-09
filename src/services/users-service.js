import { SERVICE_URL_SLASH } from "serviceEndPoints/ServiceEndPoints";
import MainApiService from "utils/MainApiService";

const getUser = () => {
  return MainApiService.get(`${SERVICE_URL_SLASH.USER}`);
};
export const UserService = {
  getUser,
};
