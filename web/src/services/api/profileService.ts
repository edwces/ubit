import { http } from "../../lib";
import { User } from "../../types/interfaces/user";

export function changeAvatar(data: FormData, token: string) {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/me/avatar`, {
    method: "POST",
    body: data,
    headers: { authorization: `Bearer ${token}` },
  }).then((response) => response.json());
}

export function getUserProfile(id: number): Promise<User> {
  return http.get(`/profiles/${id}`).then((response) => response.data);
}
