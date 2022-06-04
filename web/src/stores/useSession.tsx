import create from "zustand";
import { SessionData } from "../types/interfaces/sessionData";

interface SessionStoreState {
  data: SessionData;
  status: "idle" | "signIn" | "signOut";
}

interface SessionStoreActions {
  login: (data: SessionData) => void;
  logout: () => void;
}

type SessionStore = SessionStoreState & SessionStoreActions;

export const sessionStore = create<SessionStore>((set) => ({
  data: {
    user: {
      id: null,
      email: null,
    },
  },
  status: "idle",
  login: (data) => set({ status: "signIn", data }),
  logout: () => set((state) => ({ ...state, status: "signOut" })),
}));
