import type { Metadata } from "next";
import { AdminGalleryManager } from "@/components/admin-gallery-manager";
import { AdminLoginForm } from "@/components/admin-login-form";
import { isAdminAuthed } from "@/lib/admin-auth";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AdminPage() {
  const authed = await isAdminAuthed();
  return authed ? <AdminGalleryManager /> : <AdminLoginForm />;
}
