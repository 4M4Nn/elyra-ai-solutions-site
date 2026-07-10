import type { AuthUser } from "@/types";

const AUTH_STORAGE_KEY = "elyra_auth_user";
const AUTH_CHANGE_EVENT = "elyra-auth-change";

export function getAuthUser(): AuthUser | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(AUTH_STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as AuthUser;
  } catch {
    return null;
  }
}

export function setAuthUser(user: AuthUser) {
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export function clearAuthUser() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
  window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
}

export { AUTH_CHANGE_EVENT };
