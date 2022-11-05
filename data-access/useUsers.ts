import { useGetUsers } from "../generated/src/users";
import { useAxiosConfig } from "../util/axiosConfig";

export const useUsers: typeof useGetUsers = (params) => {
  const axiosConfig = useAxiosConfig();

  return useGetUsers(params, { request: axiosConfig });
};
