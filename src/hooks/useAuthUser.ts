"use client";

import { useEffect, useState } from "react";

import { AUTH_CHANGE_EVENT, getAuthUser } from "@/lib/auth";
import type { AuthUser } from "@/types";

export function useAuthUser(): AuthUser | null {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    queueMicrotask(() => setUser(getAuthUser()));

    function handleChange() {
      setUser(getAuthUser());
    }

    window.addEventListener(AUTH_CHANGE_EVENT, handleChange);
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handleChange);
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  return user;
}
