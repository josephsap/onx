import { useNavigate } from 'react-router-dom';
import SingleJoke from '../components/SingleJoke';
import { Button, Grid } from '@mui/material';

const SingleJokePage = () => {
  const navigate = useNavigate();

  return (
    <Grid container direction="column">
      <SingleJoke />
      <Grid item>
        <Button variant="contained" onClick={() => {navigate(-1)}} sx={{ mt: 16 }}>Back</Button>
      </Grid>
    </Grid>
  )
};

export default SingleJokePage;