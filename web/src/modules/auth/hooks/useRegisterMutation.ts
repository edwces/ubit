import { useMutation, UseMutationOptions } from "react-query";
import { register } from "../../../services/api";
import { RegisterFormValues } from "../../../types/interfaces";

export function useRegisterMutation(
  options?: Omit<
    UseMutationOptions<any, unknown, RegisterFormValues, unknown>,
    "mutationFn"
  >
) {
  return useMutation((values: RegisterFormValues) => register(values), options);
}
