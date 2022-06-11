import create from "zustand";
import { SessionData } from "../types/interfaces/sessionData";

interface SessionStoreState {
  data: SessionData;
  status: "idle" | "signIn" | "signOut";
  token: string | null;
}

interface SessionStoreActions {
  setSignedIn: (data: SessionData, token: string) => void;
  setSignedOut: () => void;
}

type SessionStore = SessionStoreState & SessionStoreActions;

export const useSession = create<SessionStore>((set) => ({
  data: {
    user: {
      id: null,
      email: null,
      name: null,
    },
  },
  status: "idle",
  token: null,
  setSignedIn: (data, token) => set({ status: "signIn", data, token }),
  setSignedOut: () =>
    set({
      data: { user: { id: null, email: null } },
      status: "signOut",
      token: null,
    }),
}));
