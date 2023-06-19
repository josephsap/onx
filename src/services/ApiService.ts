import { RandomJokeData, SearchResults } from "./interfaces";
 
const BASEURL = 'https://icanhazdadjoke.com/';

const headers: HeadersInit = new Headers({
  'Accept' : 'application/json',
  'User-Agent': 'Testing/1.1 (https://example.org/JOE/; mailto:hello@example.org) yeah-dude/1.4'
});

export class ApiService {
  // prepare answer for using static
  static async getRandomJoke(): Promise<RandomJokeData> {
    try {
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
      return responseData;
    } catch (error) {
      console.log(error);
      throw new Error('Error searching for a joke.');
    }
  }

}