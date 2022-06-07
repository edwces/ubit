import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { refreshToken } from "../../services/api";
import { useSession } from "../../stores/useSession";

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
        setSignedIn(data.user, data.token);
        setLoading(false);
      })
      .catch(() => {
        setSignedOut();
        setLoading(false);
        router.push("/account/login");
      });
  }, []);

  if (isLoading) return <div>Loading PI PuPOefihihdjh</div>;

  return <>{children}</>;
}
