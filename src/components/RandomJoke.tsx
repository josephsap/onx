import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Joke } from '../services/interfaces';
import { ApiService } from '../services/ApiService';
import { catchErrorMessage } from '../utils/CatchErrorMessage';
import { Grid, Button, CircularProgress, Link, List, ListItem, ListItemText } from '@mui/material';

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState<Joke>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleGetRandomJoke = async () => {
    setLoading(true);
    try {
      const randomJokeData = await ApiService.getRandomJoke();
      setRandomJoke(randomJokeData);
    } catch(error) {
      catchErrorMessage(error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <Grid container sx={{ mt: 6 }} direction="column">
      <Grid item xs={12} sm={6}>
        <Button variant="contained" onClick={handleGetRandomJoke}>Click to get a random joke</Button>
      </Grid>
      <Grid item xs={12} sm={6} sx={{ mt: 3 }}>
        {loading ? <CircularProgress size={25} sx={{ ml: 6 }} /> : (
          <List>
            {randomJoke && !loading && 
              <ListItem sx={{ paddingLeft: 0 }}>
                <Link underline="none" component={RouterLink} to={`/joke/${randomJoke.id}`} state={{ joke: randomJoke.joke }}>
                  <ListItemText primary={randomJoke.joke} />
                </Link>
              </ListItem>
            }
          </List>
        )}
      </Grid>
    </Grid>
  );
};

export default RandomJoke;