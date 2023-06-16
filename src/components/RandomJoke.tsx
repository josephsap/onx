import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Joke } from '../services/interfaces';
import { ApiService } from '../services/ApiService';
import { catchErrorMessage } from '../utils/CatchErrorMessage';

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState<Joke>();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <div>
      <button onClick={handleGetRandomJoke}>Click to get a random joke</button>
      {loading && <>loading stuff...</>}
      {randomJoke && !loading && <Link to={`/joke/${randomJoke.id}`} state={{ joke: randomJoke.joke }}>{randomJoke.joke}</Link>}
      <button onClick={() => {navigate('/')}}>Back</button>
    </div>
  );
};

export default RandomJoke;