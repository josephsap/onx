import { useState } from 'react';
import { ApiService } from '../services/ApiService';
import { Joke } from '../services/interfaces';
import { catchErrorMessage } from '../utils/CatchErrorMessage';
import { Link as RouterLink } from 'react-router-dom';
import _debounce from 'lodash.debounce';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
        <Typography variant="h3" component="h2">
          Search for a joke
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField onChange={handleChange} fullWidth />
      </Grid>
      <Grid item xs={12} sm={8}>
        {loading && <>loading stuff...</>}
        {Array.isArray(results) && results.length > 0 && (
          <List>
            {results.map((result) => (
              <ListItem key={result.id}>
                <Link component={RouterLink} to={`joke/${result.id}`} state={{ joke: result.joke }}>
                  <ListItemText primary={result.joke} />
                </Link>
              </ListItem>
            ))}
          </List>
        )}
        {Array.isArray(results) && results.length === 0 && !loading ? <p>No results found for that search.</p> : null}    
      </Grid>
    </Grid>
  )
};

export default JokeSearch;