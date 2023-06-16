type RandomJokeData = {
  id: string;
  joke: string;
  status: number;
}

const BASEURL = 'https://icanhazdadjoke.com/';

// const catchErrorMessage = (error: unknown) => {
//   if (error instanceof Error) return error.message;
//   return String(error);
// };

const headers: HeadersInit = new Headers({
  'Accept' : 'application/json',
  'User-Agent': 'Testing/1.1 (https://example.org/JOE/; mailto:hello@example.org) yeah-dude/1.4'
});

export class ApiService {

  static async getRandomJoke(): Promise<RandomJokeData> {
    try {
      // type this later in the svc file
      const response = await fetch(BASEURL, {
        method: 'GET',
        headers,
      });

      if (!response) {
        throw new Error('nooo');
      }

      const jsonData = await response.json();
      return jsonData.joke;
    } catch(error) {
      console.log(error);
      throw new Error("Something is Wrong!")
    }
  }
}