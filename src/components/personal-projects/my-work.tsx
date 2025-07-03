import { useState, useEffect } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}
const GITHUB_API_URL = "https://api.github.com/users/jonathanraxa/repos";

export const MyWork = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(GITHUB_API_URL)
      .then((response) => response.json())
      .then((data: Repo[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching GitHub repos: ", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-amber-50 dark:bg-amber-900 text-gray-800 dark:text-gray-100">
      <div className="px-4 py-8 max-w-3xl mx-auto">
        <h2 className="text-4xl mb-5">My Work</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="space-y-4">
            {repos.map((repo) => (
              <li key={repo.id}>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {repo.name}
                </a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
