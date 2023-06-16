import { useNavigate } from 'react-router-dom';
import SingleJoke from '../components/SingleJoke';
import Button from '@mui/material/Button';

const SingleJokePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SingleJoke />
      <Button variant="contained" onClick={() => {navigate(-1)}}>Back</Button>
    </>
  )
};

export default SingleJokePage;