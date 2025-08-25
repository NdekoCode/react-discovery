import { useDocumentTitle } from "@/hooks/use-document-title";
import { useFetch } from "@/hooks/use-fetch";
import { Post } from "@/lib/types/generics/posts";

export default function BlogPage() {
  useDocumentTitle("Blog page");
  const { data, loading } = useFetch<{ posts: Post[] }>(
    "https://dummyjson.com/posts?limit=12"
  );
  return (
    <>
      {loading ? (
        <div className="fixed inset-0 bg-black/10 flex items-center justify-center">
          <div className="flex justify-center items-center size-11 text-sm font-medium rounded-lg border border-transparent bg-transparent text-white focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none">
            <span
              className="animate-spin inline-block size-4 border-3 border-blue-700 border-t-transparent text-white rounded-full"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </span>
          </div>
        </div>
      ) : (
        <section className="py-16 md:py-32 flex flex-col items-center justify-center">
          {data ? (
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
                Blog
              </h2>
              {/* Card Blog */}
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Title */}
                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                  <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                    Read our latest news
                  </h2>
                  <p className="mt-1 text-gray-600 dark:text-neutral-400">
                    We've helped some great companies brand, design and get to
                    market.
                  </p>
                </div>
                {/* End Title */}

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
                  {/* Card */}
                  {data.posts.map((post) => (
                    <a
                      className="group flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl hover:shadow-md focus:outline-hidden focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
                      href={"#post-" + post.id}
                      key={post.id}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          className="w-full object-cover rounded-t-xl"
                          src="/post-image.jpg"
                          alt={post.title}
                        />
                      </div>
                      <div className="p-4 md:p-5">
                        <p className="mt-2 text-xs uppercase text-gray-600 dark:text-neutral-400">
                          {post.title}
                        </p>
                        <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
                          {post.body.substring(0, 75)}...
                        </h3>
                      </div>
                    </a>
                  ))}
                  {/* End Card */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Card Blog */}
            </div>
          ) : (
            <div className="min-h-60 flex flex-col">
              <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                <svg
                  className="size-10 text-gray-500 dark:text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" x2="2" y1="12" y2="12"></line>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                  <line x1="6" x2="6.01" y1="16" y2="16"></line>
                  <line x1="10" x2="10.01" y1="16" y2="16"></line>
                </svg>
                <p className="mt-2 text-sm text-gray-800 dark:text-neutral-300">
                  No data to show
                </p>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
}
