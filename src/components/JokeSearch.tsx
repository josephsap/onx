import { useState } from 'react';
import { ApiService } from '../services/ApiService';
import { Jokes } from '../services/interfaces';
import _debounce from 'lodash.debounce';

const JokeSearch = () => {
  const [results, setResults] = useState<Jokes[]>([]);

  const debounceOnSearch = _debounce(async (searchTerm: string) => {
    try {
      const jokeSearchResults = await ApiService.searchForJoke(searchTerm);
      const { results: jokes } = jokeSearchResults;
      setResults(jokes);
    } catch (error) {
      console.error(error);
    }
  }, 200);

  const handleChange = (e) => {
    if (e.target.value && e.target.value.length > 2) {
      debounceOnSearch(e.target.value);
    }
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <ul>
        {results && results.length > 0 ? (
          results.map((result) => (
            <li key={result.id}>
              <p>{result.joke}</p>
            </li>
          ))
        ) : (
          <p>loading...</p>
        )}
      </ul>
    </div>
  )
};

export default JokeSearch;