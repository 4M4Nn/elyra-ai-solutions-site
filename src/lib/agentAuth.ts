/** Cross-domain session handoff to the SEO+AEO Agent app.
 *
 * The marketing site and the agent app are different Vercel origins, so
 * localStorage can't be shared directly. After a real signup/login call
 * to the backend, the resulting JWTs are stashed here in sessionStorage
 * just long enough for DashboardRedirect to read them and forward them
 * to the agent's /auth/callback via a URL query-param redirect — the
 * only channel that works across origins.
 */
const PENDING_TOKENS_KEY = "elyra_pending_agent_tokens";

export interface PendingTokens {
  access_token: string;
  refresh_token: string;
}

export function setPendingTokens(tokens: PendingTokens) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(PENDING_TOKENS_KEY, JSON.stringify(tokens));
}

export function takePendingTokens(): PendingTokens | null {
  if (typeof window === "undefined") return null;
  const raw = window.sessionStorage.getItem(PENDING_TOKENS_KEY);
  if (!raw) return null;
  window.sessionStorage.removeItem(PENDING_TOKENS_KEY);
  try {
    return JSON.parse(raw) as PendingTokens;
  } catch {
    return null;
  }
}
