import { useState, useEffect} from 'react';
import { ApiService } from '../services/ApiService';
import { catchErrorMessage } from '../utils/CatchErrorMessage';

const RandomJoke = () => {
  const [randomJoke, setRandomJoke] = useState<string>('');

  const fetchRandomJoke = async () => {
    try {
      const randomJokeData = await ApiService.getRandomJoke();
      setRandomJoke(randomJokeData.joke);
    } catch(error) {
      catchErrorMessage(error);
    }
  };

  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <div>
      {!randomJoke ? <div>loading</div> : <div>{randomJoke}</div>}
    </div>
  );
};

export default RandomJoke;