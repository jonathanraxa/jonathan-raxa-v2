import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDev } from "@fortawesome/free-brands-svg-icons";
import { SectionHeading } from "@/components/helpers/section-heading";
import { routes } from "@/routes/routes";

interface DevArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  tag_list: string[];
}

const DEV_USERNAME = "conscious_coder";
const MAX_ARTICLES = 3;
// Only technical posts appear here; career and personal posts stay on DEV
const TECH_TAGS = [
  "react",
  "javascript",
  "typescript",
  "webdev",
  "frontend",
  "css",
  "html",
  "testing",
  "playwright",
  "accessibility",
  "a11y",
];

// DEV returns text with HTML entities encoded (e.g. "&lt;"); show the real characters
const decodeHtml = (text: string) =>
  new DOMParser().parseFromString(text, "text/html").documentElement
    .textContent ?? text;

const formatDate = (dateString: string) =>
  new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const Writing = () => {
  const [articles, setArticles] = useState<DevArticle[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle",
  );
  const sectionRef = useRef<HTMLElement>(null);

  // Load articles once the section scrolls near the viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const loadArticles = async () => {
      try {
        setStatus("loading");
        const response = await fetch(
          `https://dev.to/api/articles?username=${DEV_USERNAME}&per_page=30`,
        );
        if (!response.ok) throw new Error("Failed to fetch articles");

        const data: DevArticle[] = await response.json();
        const technical = data
          .filter((article) =>
            article.tag_list.some((tag) => TECH_TAGS.includes(tag)),
          )
          .sort(
            (a, b) =>
              new Date(b.published_at).getTime() -
              new Date(a.published_at).getTime(),
          )
          .slice(0, MAX_ARTICLES);

        setArticles(technical);
        setStatus("done");
      } catch {
        setStatus("error");
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          loadArticles();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Hide the whole section if DEV is unreachable or there's nothing to show
  if (status === "error" || (status === "done" && articles.length === 0)) {
    return null;
  }

  return (
    <section ref={sectionRef} className="px-4 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        title="Writing"
        subtitle="Things I've learned, written down on DEV."
      />

      {status !== "done" ? (
        <div className="flex min-h-[200px] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {article.cover_image && (
                <div className="aspect-[2/1] overflow-hidden bg-gray-100">
                  <img
                    loading="lazy"
                    src={article.cover_image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                  {formatDate(article.published_at)} ·{" "}
                  {article.reading_time_minutes} min read
                </p>
                <h3 className="mt-1 text-lg font-bold text-gray-900 transition-colors duration-200 group-hover:text-yellow-600">
                  {decodeHtml(article.title)}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                  {decodeHtml(article.description)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.tag_list.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-5 text-sm font-semibold text-gray-900 group-hover:text-yellow-600">
                  Read on DEV →
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <a
          href={routes.devto}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold hover:text-yellow-600 transition-colors duration-200"
        >
          <FontAwesomeIcon icon={faDev} className="mr-2" />
          More on my DEV profile →
        </a>
      </div>
    </section>
  );
};
