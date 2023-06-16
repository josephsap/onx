import { RandomJokeData, SearchResults } from "./interfaces";
 
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
  // prepare answer for using static
  static async getRandomJoke(): Promise<RandomJokeData> {
    try {
      // type this later in the svc file
      const response = await fetch(BASEURL, {
        method: 'GET',
        headers,
      });
      const jsonData = await response.json();
      return jsonData;
    } catch(error) {
      console.log(error);
      throw new Error('Error getting a random joke.');
    }
  }

  static async searchForJoke(searchTerm: string): Promise<SearchResults> {
    try {
      const response = await fetch(`${BASEURL}search?term=${searchTerm}`, {
        method: 'GET',
        headers,
      });
      const responseData: SearchResults = await response.json();
      console.log(responseData, '****')
      // const jokesOnly: Jokes[] = responseData.results.map(joke => Pick(joke, 'id', 'joke')); 
      // type Jokes1 = Pick<SearchResults, 'results'> & {
      //   results: Array<Pick<SearchResults['results'][0], 'id' | 'joke'>>
      // };
      // const results2: Jokes1[] = responseData.results;
     
      // type Jokes1 = Pick<SearchResults, 'results'> & {
      //   results: Array<Pick<SearchResults['results'], 'id' | 'joke'>>
      // };
      // type Jokes1 = Pick<Jokes, 'id' | 'joke'>
      // type Jokes1 = Pick<SearchResults['results'], Jokes>;
      // const jokes: Jokes1[] = responseData.results;
      // const jokes: Jokes1[] = responseData.results;
      // async login({ email, password }: Pick<Credentials, 'email' | 'password'>) {...}
      return responseData;
    } catch (error) {
      console.log(error);
      throw new Error('Error searching for a joke.');
    }
  }

}