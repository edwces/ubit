import { AppShell } from "@mantine/core";
import { ReactNode } from "react";
import { DefaultHeader } from "./DefaultHeader";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return <AppShell header={<DefaultHeader />}>{children}</AppShell>;
}
