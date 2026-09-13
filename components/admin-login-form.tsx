"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        setError(body?.message ?? "Login failed.");
        return;
      }
      router.refresh();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-sm flex-col justify-center gap-4 px-6 py-16">
      <h1 className="text-2xl font-semibold text-[#2c2c2c]">Admin Login</h1>
      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          autoFocus
          className="rounded-lg border border-[#D8CEC0] px-4 py-2.5 text-sm focus:border-[#16412d] focus:outline-none"
        />
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
        <button
          type="submit"
          disabled={submitting || password.length === 0}
          className="rounded-lg bg-[#16412d] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#093528] disabled:opacity-50"
        >
          {submitting ? "Checking..." : "Log in"}
        </button>
      </form>
    </div>
  );
}
