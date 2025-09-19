export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8007/v1";

export async function submitWaitlist(
  email: string,
  source?: string
): Promise<{ ok: boolean; message: string }> {
  try {
    const clientId = getOrCreateWaitlistClientId();
    const res = await fetch(`${API_BASE_URL}/waitlist`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, source, client_id: clientId }),
    });
    const data = await res.json().catch(() => ({}));
    return {
      ok: res.ok,
      message: data?.message ?? (res.ok ? "Success" : "Failed"),
    };
  } catch (e) {
    return { ok: false, message: "Failed" };
  }
}

function getOrCreateWaitlistClientId(): string {
  if (typeof window === "undefined") return "unknown";
  let id: string | null = localStorage.getItem("waitlist_client_id");
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem("waitlist_client_id", id);
  }
  return id;
}
