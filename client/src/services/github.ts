// client/src/services/github.ts
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`/api/users/${username}/repos?sort=updated&direction=desc`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar repositórios do GitHub');
    }
    
    const repos: GitHubRepo[] = await response.json();
    return repos.filter(repo => !repo.fork && !repo.archived);
  } catch (error) {
    console.error('Erro ao buscar repositórios:', error);
    throw error;
  }
}