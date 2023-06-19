import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';

interface UseLocationState {
  state: {
    joke: string;
  }
}

const SingleJoke = () => {
  const { state: { joke } } = useLocation() as UseLocationState;
  const [textCopied, setTextCopied] = useState<boolean>(false);

  const handleClickToCopy = () => {
    navigator.clipboard.writeText(joke);
    setTextCopied(true);
  };
  
  return (
    <Grid container direction="column">
      <Grid item xs={12} sx={{ mt: 6, mb: 4 }}>
        <Typography variant="body1">{joke}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleClickToCopy}>{!textCopied ? 'Copy text' : 'Copied!'}</Button>
      </Grid>
    </Grid>
  )
};

export default SingleJoke;