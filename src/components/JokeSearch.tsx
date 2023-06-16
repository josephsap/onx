import { useState } from 'react';
import { ApiService } from '../services/ApiService';
import { Jokes } from '../services/interfaces';
import { catchErrorMessage } from '../utils/CatchErrorMessage';
import { Link } from 'react-router-dom';
import _debounce from 'lodash.debounce';

const JokeSearch = () => {
  const [results, setResults] = useState<Jokes[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const debounceOnSearch = _debounce(async (searchTerm: string) => {
    try {
      const jokeSearchResults = await ApiService.searchForJoke(searchTerm);
      const { results: jokes } = jokeSearchResults;
      setResults(jokes);
      setLoading(false);
    } catch (error) {
      console.error(error);
      catchErrorMessage(error);
    }
  }, 200);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    if (e.target.value && e.target.value.length > 2) {
      debounceOnSearch(e.target.value);
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {loading && <>loading stuff...</>}
        {Array.isArray(results) && results.length > 0 && (
          results.map((result) => (
            <li key={result.id}>
              <Link to={`joke/${result.id}`}>{result.joke}</Link>
            </li>
          ))
        )}
        {Array.isArray(results) && results.length === 0 && !loading ? <p>No results found for that search.</p> : null}
      </ul>
    </div>
  )
};

export default JokeSearch;