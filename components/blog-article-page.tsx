import Image from "next/image";
import { blogPostByPath } from "@/content/blogs";

function DateIcon() {
  return (
    <svg aria-hidden="true" className="size-[14px]" viewBox="0 0 448 512" fill="currentColor">
      <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272Zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40Zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40ZM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40Zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40ZM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40Zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40ZM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48Z" />
    </svg>
  );
}

function ReadingTimeIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm.5-13H11v6l5.2 3.2.8-1.3-4.5-2.7V7Z" />
    </svg>
  );
}

export function BlogArticlePage({ path }: { path: string }) {
  const post = blogPostByPath.get(path);
  if (!post) return null;

  return (
    <article className="blog-article-page bg-[#F7F3EC]">
      <section className="w-full">
        <div className="relative min-h-[40vh] w-full overflow-hidden sm:min-h-[50vh] lg:min-h-[85vh]">
          <Image src={post.heroImage} alt="Banner" fill priority sizes="100vw" className="blog-zoom-slow object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </section>

      <section className="relative z-10 -mt-24 pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-lg border border-[#E9E1D5] bg-white p-6 shadow-[0_15px_60px_rgba(0,0,0,0.05)] md:p-14">
            <div className="flex flex-wrap items-center gap-3 border-b border-[#EFE7DB] pb-8 text-sm text-[#7A7A7A]">
              <span className="blog-font-header text-lg font-semibold text-[#1E1E1E]">{post.author}</span>
              <span className="text-[#B89B5E]">•</span>
              <span className="flex items-center gap-1 font-extrabold text-[#B89B5E]"><DateIcon />{post.published}</span>
              <span className="text-[#B89B5E]">•</span>
              <span className="flex items-center gap-1 font-extrabold text-[#B89B5E]"><ReadingTimeIcon />{post.readTime}</span>
            </div>

            {post.category ? (
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
                <span className="text-xs font-extrabold uppercase tracking-[2px] text-emerald-600">{post.category}</span>
              </div>
            ) : null}

            <h1 className="blog-font-header mt-5 text-3xl leading-tight text-[#1E1E1E] md:text-5xl">{post.title}</h1>
            <p className="mt-6 text-sm leading-loose text-[#4E4B47]">{post.description}</p>

            <div className="pt-4">
              {post.body.map((block, index) => {
                if (block.type === "heading") {
                  return <h1 key={`${block.type}-${index}`} className="blog-font-header mt-6 text-3xl leading-tight text-[#1E1E1E] md:text-5xl lg:mt-16">{block.text}</h1>;
                }
                if (block.type === "image") {
                  return (
                    <div key={`${block.type}-${index}`} className="my-14 flex w-full items-center justify-center overflow-hidden">
                      <Image src={block.src} alt={block.alt} width={1400} height={900} className="h-[260px] w-[300px] rounded-lg object-cover" />
                    </div>
                  );
                }
                return <p key={`${block.type}-${index}`} className="mt-7 text-sm leading-loose text-[#4E4B47]">{block.text}</p>;
              })}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
