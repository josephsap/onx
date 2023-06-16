import { useState, useEffect } from 'react';

const catchErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

// type RandomJokeData = {
//   id: string;
//   joke: string;
//   status: number;
// }

const HomePage = () => {
  const [randomJoke, setRandomJoke] = useState<string>('');

  useEffect(() => {
    const headers: HeadersInit = new Headers({
      'Accept' : 'application/json',
      'User-Agent': 'GroovyBib/1.1 (https://example.org/GroovyBib/; mailto:GroovyBib@example.org) BasedOnFunkyLib/1.4'
    });

    const fetchRandomJoke = async () => {
      try {
        // type this later in the svc file
        const response = await fetch('https://icanhazdadjoke.com/', {
          method: 'GET',
          headers,
        });

        const jsonData = await response.json();
        setRandomJoke(jsonData.joke);
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