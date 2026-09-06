import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blogs";

function ReadingTimeIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16.5 12" />
    </svg>
  );
}

export function BlogPage() {
  return (
    <div className="blogs-page flex min-h-screen flex-col bg-[#EAE4DB]">
      <section className="min-h-screen px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-3 px-4 text-center lg:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <p className="text-xs font-black uppercase tracking-[2px] text-emerald-600 lg:text-sm">Rekha Dental Blogs</p>
            </div>
            <h1 className="blog-font-header mt-2 max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-[#2c2c2c] md:text-4xl lg:text-5xl">
              Dental Insights and Expert Care
            </h1>
          </div>

          <div>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.path}
                  href={`/${post.path}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl bg-[#F5F1EA] transition-all duration-700 hover:-translate-y-1"
                >
                  <div className="relative h-[200px] w-full overflow-hidden rounded-t-xl lg:h-[260px]">
                    <Image
                      src={post.heroImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-4 lg:p-6">
                    <div className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[2px] text-[#B89B5E]">
                      <span>{post.number}</span>
                      <span className="h-[2px] w-5 bg-[#B89B5E]" />
                      <span className="line-clamp-1">{post.category ?? ""}</span>
                    </div>
                    <h2 className="blog-font-header mt-5 line-clamp-2 text-xl leading-snug text-[#2C2C2C] lg:text-2xl">{post.title}</h2>
                    <p className="mt-4 line-clamp-2 min-h-[62px] text-sm leading-relaxed text-[#6B6B6B]">{post.description}</p>
                    <div className="mt-auto pt-3 lg:pt-8">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[2px] text-[#A0A0A0]">
                          <ReadingTimeIcon className="size-[14px] text-[#B89B5E]" />
                          <span className="font-extrabold text-[#B89B5E]">{post.readTime}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[2px] text-[#B89B5E]">
                          Read More
                          <span className="block h-[2px] w-6 bg-[#B89B5E] transition-all duration-300 group-hover:w-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-2">
              <Link href="/blogs?page=1" aria-current="page" className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-lg bg-[#1D4D3B] text-sm text-white transition duration-200 active:scale-95">
                1
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
