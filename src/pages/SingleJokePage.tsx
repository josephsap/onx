import { useNavigate } from 'react-router-dom';
import SingleJoke from '../components/SingleJoke';

const SingleJokePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SingleJoke />
      <button onClick={() => {navigate(-1)}}>Back</button>
    </>
  )
};

export default SingleJokePage;