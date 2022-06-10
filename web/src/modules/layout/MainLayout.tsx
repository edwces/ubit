import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { useSession } from "../../stores/useSession";
import { AuthorizedHeader } from "./AuthorizedHeader";
import { DefaultHeader } from "./DefaultHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const status = useSession((state) => state.status);

  return (
    <AppShell
      header={status === "signIn" ? <AuthorizedHeader /> : <DefaultHeader />}
    >
      {children}
    </AppShell>
  );
}
