import { useMutation, UseMutationOptions } from "react-query";
import { login } from "../../../services/api";
import { LoginFormValues } from "../../../types/interfaces/loginFormValues";

export function useLoginMutation(
  options?: Omit<
    UseMutationOptions<any, unknown, LoginFormValues, unknown>,
    "mutationFn"
  >
) {
  return useMutation((values: LoginFormValues) => login(values), options);
}
