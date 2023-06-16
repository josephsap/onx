export interface RandomJokeData {
  id: string;
  joke: string;
  status: number;
}

export interface Jokes {
  id: string;
  joke: string;
}

export interface SearchResults {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: Jokes[];
  search_term: string;
  status: number;
  total_jokes: number;
  total_pages: 1;
}