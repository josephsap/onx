import { useState, useEffect } from 'react';
import { ApiService } from '../services/ApiService';

const catchErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};


const HomePage = () => {
  const [randomJoke, setRandomJoke] = useState<string>('');

  useEffect(() => {
    const fetchRandomJoke = async () => {
      try {
        const randomJokeData = await ApiService.getRandomJoke();
        setRandomJoke(randomJokeData.joke);
      } catch(error) {
        catchErrorMessage(error);
      }
    };

    fetchRandomJoke();
  }, []);

  console.log(randomJoke, 'jhiihi')
  return (
    <div>
      {!randomJoke ? <div>loading</div> : <div>{randomJoke}</div>}
    </div>
  )
}

export default HomePage;