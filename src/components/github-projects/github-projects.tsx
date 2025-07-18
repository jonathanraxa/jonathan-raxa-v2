import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faStar, faCodeBranch, faEye } from "@fortawesome/free-solid-svg-icons";

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
}

export const GitHubProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showRepos, setShowRepos] = useState(false);

  const fetchGitHubRepos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        "https://api.github.com/users/jonathanraxa/repos?sort=updated&per_page=20",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }

      const data: GitHubRepo[] = await response.json();

      const filteredRepos = data
        .filter((repo) => !repo.fork)
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        );

      setRepos(filteredRepos);
      setShowRepos(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full p-6 bg-gray-600/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
      <div className="mt-10">
        <h2 className="uppercase text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white">
          GitHub Projects
        </h2>
        <p className="text-base sm:text-lg text-center mt-2 text-white">
          My latest public repositories from GitHub
        </p>
      </div>

      {/* Fixed Button Container */}
      <div className="text-center py-3 min-h-[120px] flex items-center justify-center">
        {!showRepos && !loading && !error && (
          <Button
            onClick={fetchGitHubRepos}
            className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Show My GitHub Projects
          </Button>
        )}

        {loading && (
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Loading GitHub projects...
            </p>
          </div>
        )}

        {error && (
          <div className="text-center">
            <p className="text-red-500 mb-2">Error loading projects: {error}</p>
            <Button
              onClick={fetchGitHubRepos}
              variant="outline"
              className="hover:text-yellow-500 text-white"
            >
              Try Again
            </Button>
          </div>
        )}

        {showRepos && repos.length > 0 && (
          <Button
            onClick={() => setShowRepos(false)}
            variant="outline"
            className="hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-300 text-white"
          >
            Hide Projects
          </Button>
        )}
      </div>

      {showRepos && repos.length > 0 && (
        <div className="space-y-4">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => (
              <Card
                key={repo.id}
                className="hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              >
                <CardHeader className="pb-3">
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
                <CardContent className="pt-0">
                  {repo.description && (
                    <p className="text-gray-600 dark:text-gray-200 text-sm mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                  )}

                  {/* Stats */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-300 mb-3">
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
                      <span className="font-medium">{repo.watchers_count}</span>
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="mb-3">
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
                  <div className="text-xs text-gray-500 dark:text-gray-300 mb-3">
                    <div className="mb-1">
                      <span className="font-medium">Created:</span>{" "}
                      {formatDate(repo.created_at)}
                    </div>
                    <div>
                      <span className="font-medium">Updated:</span>{" "}
                      {formatDate(repo.updated_at)}
                    </div>
                  </div>

                  {/* Action Button */}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
