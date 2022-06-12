import { useMutation, UseMutationOptions } from "react-query";
import { logout } from "../../../services/api/authService";

export function useLogoutMutation(
  options?: Omit<UseMutationOptions<any, unknown, void, unknown>, "mutationFn">
) {
  return useMutation(() => logout(), options);
}
