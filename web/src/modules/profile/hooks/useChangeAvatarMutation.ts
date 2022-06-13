import { useMutation, UseMutationOptions } from "react-query";
import { changeAvatar } from "../../../services/api/profileService";

export function useChangeAvatarMutation(
  options?: Omit<
    UseMutationOptions<
      any,
      unknown,
      { data: FormData; token: string },
      unknown
    >,
    "mutationFn"
  >
) {
  return useMutation(
    ({ data, token }: { data: FormData; token: string }) =>
      changeAvatar(data, token),
    options
  );
}
