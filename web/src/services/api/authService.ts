import { http } from "../../lib";
import { RegisterFormValues } from "../../types/interfaces";
import { LoginFormValues } from "../../types/interfaces/loginFormValues";

export function register(data: RegisterFormValues) {
  return http.post("/auth/register", data).then((response) => response.data);
}

export function login(data: LoginFormValues) {
  return http.post("/auth/login", data).then((response) => response.data);
}

export function refreshToken() {
  return http
    .get("/auth/token", { withCredentials: true })
    .then((response) => response.data);
}
