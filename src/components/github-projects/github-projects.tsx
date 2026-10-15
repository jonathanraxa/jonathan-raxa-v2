import { useEffect, useRef, useState } from "react";
import { SectionHeading } from "@/components/helpers/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faCodeBranch,
  faEye,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  created_at: string;
  updated_at: string;
  topics: string[];
  fork: boolean;
  archived: boolean;
  pushed_at: string;
}

const GITHUB_USER = "jonathanraxa";
const INITIAL_COUNT = 6;

export const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const fetchGitHubRepos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&per_page=100`,
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data: GitHubRepo[] = await response.json();

      // Most recently worked-on first; skip forks and archived repos
      const filteredRepos = data
        .filter((repo) => !repo.fork && !repo.archived)
        .sort(
          (a, b) =>
            new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime(),
        );

      setRepos(filteredRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  // Load repos once the section scrolls near the viewport
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          fetchGitHubRepos();
        }
      },
      { rootMargin: "300px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const visibleRepos = showAll ? repos : repos.slice(0, INITIAL_COUNT);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Function to check if homepage URL is a GitHub Pages URL
  const isGitHubPagesUrl = (url: string | null): boolean => {
    if (!url) return false;
    return (
      url.includes("github.io") ||
      url.includes("pages.dev") ||
      url.includes("vercel.app") ||
      url.includes("netlify.app")
    );
  };

  // Function to get GitHub Pages URL (either from homepage or construct it)
  const getGitHubPagesUrl = (repo: GitHubRepo): string | undefined => {
    // If homepage exists and looks like a GitHub Pages URL, use it
    if (repo.homepage && isGitHubPagesUrl(repo.homepage)) {
      return repo.homepage;
    }

    // Otherwise, construct the standard GitHub Pages URL
    // return `https://jonathanraxa.github.io/${repo.name}`;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-16 sm:px-8 sm:py-20 bg-gray-600/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
    >
      <SectionHeading
        title="GitHub Projects"
        subtitle="What I've been working on lately"
        className="text-white"
      />

      {loading && (
        <div className="flex min-h-[200px] flex-col items-center justify-center space-y-2">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500"></div>
          <p className="text-sm text-gray-200">Loading GitHub projects...</p>
        </div>
      )}

      {error && (
        <div className="flex min-h-[200px] flex-col items-center justify-center text-center">
          <p className="text-red-300 mb-3">
            Couldn't load projects from GitHub.
          </p>
          <Button
            onClick={fetchGitHubRepos}
            variant="outline"
            className="hover:text-yellow-500 text-white"
          >
            Try Again
          </Button>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visibleRepos.map((repo) => {
              const githubPagesUrl = getGitHubPagesUrl(repo);
              const hasGitHubPages =
                githubPagesUrl &&
                (repo.homepage || isGitHubPagesUrl(githubPagesUrl));

              return (
                <Card
                  key={repo.id}
                  className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex flex-col h-full"
                >
                  <CardHeader className="pb-3 flex-shrink-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="text-lg text-white"
                        />
                        <CardTitle className="text-base font-bold truncate text-gray-800 dark:text-gray-100">
                          {repo.name}
                        </CardTitle>
                      </div>
                      {repo.language && (
                        <span className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                          {repo.language}
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-1 flex flex-col">
                    {repo.description && (
                      <p className="text-gray-600 dark:text-gray-200 text-sm mb-3 line-clamp-2 flex-shrink-0">
                        {repo.description}
                      </p>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-300 mb-3 flex-shrink-0">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-yellow-500"
                        />
                        <span className="font-medium">
                          {repo.stargazers_count}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faCodeBranch}
                          className="text-blue-500"
                        />
                        <span className="font-medium">{repo.forks_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-green-500"
                        />
                        <span className="font-medium">
                          {repo.watchers_count}
                        </span>
                      </div>
                    </div>

                    {/* Topics */}
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="mb-3 flex-shrink-0">
                        <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {repo.topics.slice(0, 3).map((topic, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 rounded-full"
                            >
                              {topic}
                            </span>
                          ))}
                          {repo.topics.length > 3 && (
                            <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                              +{repo.topics.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Dates */}
                    <div className="text-xs text-gray-500 dark:text-gray-300 mb-3 flex-shrink-0">
                      <div className="mb-1">
                        <span className="font-medium">Created:</span>{" "}
                        {formatDate(repo.created_at)}
                      </div>
                      <div>
                        <span className="font-medium">Updated:</span>{" "}
                        {formatDate(repo.updated_at)}
                      </div>
                    </div>

                    {/* Action Buttons - Always at bottom */}
                    <div className="space-y-2 mt-auto pt-3 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full hover:bg-yellow-500 hover:text-white hover:border-yellow-500 transition-all duration-300 cursor-pointer text-white"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          className="mr-1 text-white"
                        />
                        View on GitHub
                      </Button>

                      {hasGitHubPages && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 cursor-pointer text-white"
                          onClick={() => window.open(githubPagesUrl, "_blank")}
                        >
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="mr-1 text-white"
                          />
                          Live Demo
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            {repos.length > INITIAL_COUNT && (
              <Button
                onClick={() => setShowAll((show) => !show)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 rounded-lg font-semibold transition-colors duration-300"
              >
                {showAll
                  ? "Show fewer"
                  : `Show all ${repos.length} repositories`}
              </Button>
            )}
            <a
              href={`https://github.com/${GITHUB_USER}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white hover:text-yellow-500 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              View my GitHub profile →
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
