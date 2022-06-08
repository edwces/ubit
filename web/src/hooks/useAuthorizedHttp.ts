import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import { http } from "../lib";
import { useSession } from "../stores/useSession";

export function useAuthorizedHttp() {
  const token = useSession((state) => state.token);

  const attachAuthHeader = (config: AxiosRequestConfig<any>) => {
    if (!token) return config;
    config.headers!.authorization = `Bearer ${token}`;
    return config;
  };

  useEffect(() => {
    const id = http.interceptors.request.use(attachAuthHeader);

    return () => http.interceptors.request.eject(id);
  }, [token]);
}
