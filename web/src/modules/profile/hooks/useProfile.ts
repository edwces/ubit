import { useQuery, UseQueryOptions } from "react-query";
import { getUserProfile } from "../../../services/api/profileService";
import { User } from "../../../types/interfaces/user";

export function useProfile(
  id: number,
  options?: Omit<
    UseQueryOptions<User, unknown, User, (string | number)[]>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery(["profile", id], () => getUserProfile(id), options);
}
