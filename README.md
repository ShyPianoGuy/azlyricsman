# azlyricsman
[![npm package](https://nodei.co/npm/azlyricsman.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/azlyricsman/)

[![Build Status](https://travis-ci.org/DevinThePancake/azlyricsman.svg?branch=master)](https://travis-ci.org/DevinThePancake/azlyricsman)
[![Dependency Status](https://img.shields.io/david/devinthepancake/azlyricsman.svg?style=flat-square)](https://david-dm.org/devinthepancake/azlyricsman)

This uses [azlyrics](https://azlyrics.com/) and gets the song of your choice and returns a promise with song lyrics, title, and song

Usage:
```js
const fetchSong = require('azlyricsman')

fetchSong('Meme machine').then(song => console.log(song.lyrics))
//Fetches the song you give and returns the lyrics 

fetchSong('Meme machine').then(song => console.log(song.title))
//Fetches the song you give and returns the title

fetchSong('Meme machine').then(song => console.log(song.artist))
//Fetches the song you give and returns the artist

fetchSong('Meme machine').then(song => console.log(`Lyrics for the song ${song.title} by ${song.artist}\n\n${song.lyrics}`))
//This is noice
```