# LOTR API Wrapper
A simple JavaScript wrapper for the Lord of the Rings API (https://the-one-api.dev/). This library makes it easy to interact with the API and fetch data about the Lord of the Rings movies using Node.js.

## Features
- Fetch a list of all the Lord of the Rings movies
- Fetch a specific movie by its ID
- Fetch quotes for a specific movie by its ID

## Installation

Install the package using npm:

`npm install --save @jddunn9/lotr-sdk`

or using yarn:

`yarn add @jddunn9/lotr-sdk`

## Usage
First, import the lotr class from the package:

`import lotr from '@jddunn9/lotr-sdk';`

Next, create a new instance of the lotr class with your API key:

`const lotrAPI = new lotr('your-api-key');`

Now you can use the available methods to fetch data from the API:

Get all movies

// Supports all the parameters for the one api tool.
const params = {
    limit: 1,
    page: 1,
    offset: 1,
    sort: 'name:asc', // alt 'name:desc'
    name: 'Gandolf'
};
lotrAPI.getMovies(params)
    .then(movies => console.log(movies))
    .catch(error => console.error(error));

Response:

{
  docs: [
    {
      _id: '5cd95395de30eff6ebccde56',
      name: 'The Lord of the Rings Series',
      runtimeInMinutes: 558,
      budgetInMillions: 281,
      boxOfficeRevenueInMillions: 2917,
      academyAwardNominations: 30,
      academyAwardWins: 17,
      rottenTomatoesScore: 94
    },
    ...
  ],
  total: 8,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1
}


Get a specific movie by its ID

const params = {
    ...
};
lotrAPI.getMovie('movie-id', params)
    .then(movie => console.log(movie))
    .catch(error => console.error(error));

Response:

{
  docs: [
    {
      _id: '5cd95395de30eff6ebccde56',
      name: 'The Lord of the Rings Series',
      runtimeInMinutes: 558,
      budgetInMillions: 281,
      boxOfficeRevenueInMillions: 2917,
      academyAwardNominations: 30,
      academyAwardWins: 17,
      rottenTomatoesScore: 94
    }
  ],
  total: 1,
  limit: 1000,
  offset: 0,
  page: 1,
  pages: 1
}

Get quotes for a specific movie by its ID

const params = {
    ...
};
lotrAPI.getMovieQuote('movie-id', params)
    .then(quotes => console.log(quotes))
    .catch(error => console.error(error));

Response:
{ docs: [], total: 0, limit: 1000, offset: 0, page: 1, pages: 1 }

## License
This project is licensed under the MIT License.

## Contributing
If you would like to contribute, please feel free to fork the repository and submit a pull request.