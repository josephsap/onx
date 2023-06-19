import { useState } from 'react';
import { ApiService } from '../services/ApiService';
import { Joke } from '../services/interfaces';
import { catchErrorMessage } from '../utils/CatchErrorMessage';
import { Link as RouterLink } from 'react-router-dom';
import _debounce from 'lodash.debounce';
import { CircularProgress, InputAdornment, Link, Grid, OutlinedInput, List, ListItem, ListItemText, Typography, Pagination } from '@mui/material';

const JokeSearch = () => {
  const [results, setResults] = useState<Joke[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(1);

  const getJokes = async (pageNum = 1, searchText: string) => {
    try {
      const jokeSearchResults = await ApiService.searchForJoke(searchText, pageNum);
      const { results: jokes, total_pages } = jokeSearchResults;
      setCount(total_pages);
      setResults(jokes);
      setLoading(false);
    } catch (error) {
      // Also should show a notification to the user here.
      console.error(error);
      catchErrorMessage(error);
    }
  };

  const debounceOnSearch = _debounce((text: string) => {
    getJokes(page, text);
  }, 200);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(1);
    setLoading(true);
    setPage(1);
    if (e.target.value && e.target.value.length > 2) {
      setSearchTerm(e.target.value);
      debounceOnSearch(e.target.value);
    } else {
      setLoading(false);
      setResults([]);
    }
  };

  const handlePaginationChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    getJokes(value, searchTerm);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 2}}>
            Search for a joke
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <OutlinedInput
            onChange={handleInputChange}
            fullWidth
            sx={{ mb: 4 }}
            endAdornment={
              <InputAdornment position="end">
                {loading ? <CircularProgress size={20} /> : null}
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          {Array.isArray(results) && results.length > 0 && (
            <List>
              {results.map((result) => (
                <ListItem key={result.id}>
                  <Link underline="none" component={RouterLink} to={`joke/${result.id}`} state={{ joke: result.joke }}>
                    <ListItemText primary={result.joke} />
                  </Link>
                </ListItem>
              ))}
            </List>
          )}
          {Array.isArray(results) && results.length === 0 && !loading ? <Typography>No results found for that search.</Typography> : null}    
        </Grid>
      </Grid>
      {count > 1 && (
        <Grid container justifyContent="center">
          <Grid item xs={12} sx={{ mb: 4 }}>
            <Pagination count={count} onChange={handlePaginationChange} page={page} />
          </Grid>
        </Grid>
      )}
    </>
  )
};

export default JokeSearch;