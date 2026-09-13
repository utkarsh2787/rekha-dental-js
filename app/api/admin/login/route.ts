import { z } from "zod";
import { checkAdminPassword, createAdminSession } from "@/lib/admin-auth";

const loginSchema = z.object({ password: z.string().min(1) });

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return Response.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = loginSchema.safeParse(json);
  if (!parsed.success) {
    return Response.json({ message: "Password is required." }, { status: 400 });
  }

  if (!checkAdminPassword(parsed.data.password)) {
    return Response.json({ message: "Incorrect password." }, { status: 401 });
  }

  await createAdminSession();
  return Response.json({ ok: true });
}
