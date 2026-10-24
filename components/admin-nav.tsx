import Link from "next/link";

const links = [
  { href: "/admin", label: "Gallery" },
  { href: "/admin/blogs", label: "Blogs" },
];

export function AdminNav({ active }: { active: "/admin" | "/admin/blogs" }) {
  return (
    <nav className="flex gap-2" aria-label="Admin sections">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-current={link.href === active ? "page" : undefined}
          className={`rounded-full border px-4 py-1.5 text-xs font-semibold transition ${link.href === active ? "border-[#16412d] bg-[#16412d] text-white" : "border-[#D8CEC0] text-[#2C2C2C] hover:border-[#16412d]"}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
