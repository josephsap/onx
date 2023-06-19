import { useState } from 'react';
import { ApiService } from '../services/ApiService';
import { Joke } from '../services/interfaces';
import { catchErrorMessage } from '../utils/CatchErrorMessage';
import { Link as RouterLink } from 'react-router-dom';
import _debounce from 'lodash.debounce';
import { CircularProgress, InputAdornment, Link, Grid, OutlinedInput, List, ListItem, ListItemText, Typography } from '@mui/material';

const JokeSearch = () => {
  const [results, setResults] = useState<Joke[] | null>(null);
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
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" sx={{ mt: 6, mb: 2}}>
          Search for a joke
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <OutlinedInput
          onChange={handleChange}
          fullWidth
          sx={{ mb: 4 }}
          endAdornment={
            <InputAdornment position="end">
              {loading ? <CircularProgress size={20} /> : null}
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={12} sm={8} sx={{ mb: 4 }}>
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
  )
};

export default JokeSearch;