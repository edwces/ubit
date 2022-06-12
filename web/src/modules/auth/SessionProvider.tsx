import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { refreshToken } from "../../services/api";
import { useSession } from "../../stores/useSession";
import { PageLoader } from "../util/PageLoader";

interface SessionProviderProps {
  children: ReactNode;
}

export function SessionProvider({ children }: SessionProviderProps) {
  const setSignedIn = useSession((state) => state.setSignedIn);
  const setSignedOut = useSession((state) => state.setSignedOut);
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // request for new token from /token endpoint
    refreshToken()
      .then((data) => {
        setSignedIn({ user: data.user }, data.token);
        setLoading(false);
      })
      .catch(() => {
        setSignedOut();
        setLoading(false);
      });
  }, []);

  if (isLoading) return <PageLoader />;

  return <>{children}</>;
}
