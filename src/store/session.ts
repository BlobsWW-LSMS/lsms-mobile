import { create } from "zustand";

import type { SessionUser, UserRole } from "@/types/role";

type SessionState = {
  isAuthenticated: boolean;
  user: SessionUser | null;
  login: (payload: { email: string; password: string }) => void;
  signUp: (payload: { name: string; email: string; password: string }) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
};

const resolveRoleFromEmail = (email: string): UserRole => {
  if (email.includes("admin")) return "admin";
  if (email.includes("teacher")) return "teacher";
  return "parent";
};

export const useSessionStore = create<SessionState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: ({ email }) =>
    set({
      isAuthenticated: true,
      user: {
        id: "u-1",
        name: "Demo User",
        email,
        role: resolveRoleFromEmail(email.toLowerCase())
      }
    }),
  signUp: ({ name, email }) =>
    set({
      isAuthenticated: true,
      user: {
        id: "u-" + Date.now(),
        name,
        email,
        role: resolveRoleFromEmail(email.toLowerCase())
      }
    }),
  logout: () =>
    set({
      isAuthenticated: false,
      user: null
    }),
  setRole: (role) =>
    set((state) => ({
      user: state.user
        ? {
            ...state.user,
            role
          }
        : null
    }))
}));
