const fetch = require('node-fetch');

const url = 'https://soccer-football-info.p.rapidapi.com/matches/view/basic/?i=1&l=en_US';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '16d74affcfmshe3645861587a700p102bb4jsn805347eb7e07',
    'X-RapidAPI-Host': 'soccer-football-info.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));00