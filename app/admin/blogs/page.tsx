import type { Metadata } from "next";
import { AdminBlogManager } from "@/components/admin-blog-manager";
import { AdminLoginForm } from "@/components/admin-login-form";
import { isAdminAuthed } from "@/lib/admin-auth";

export const metadata: Metadata = { robots: { index: false, follow: false } };

export default async function AdminBlogsPage() {
  const authed = await isAdminAuthed();
  return authed ? <AdminBlogManager /> : <AdminLoginForm />;
}
