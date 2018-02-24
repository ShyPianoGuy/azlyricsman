# azlyricsman [![Build Status](https://travis-ci.org/DevinThePancake/azlyricsman.svg?branch=master)](https://travis-ci.org/DevinThePancake/azlyricsman) [![Dependency Status](https://img.shields.io/david/devinthepancake/azlyricsman.svg?style=flat-square)](https://david-dm.org/devinthepancake/azlyricsman)

[![npm package](https://nodei.co/npm/azlyricsman.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/azlyricsman/)

This uses [azlyrics](https://azlyrics.com/) and gets the song of your choice and returns a promise with song lyrics, title, and song

Usage:
```js
const lyrics = require('azlyricsman');

const get = lyrics.get('Meme Machine').then((song) => {
   console.log(`Lyrics for ${song.song} by ${song.artist}:\n${song.lyrics}`);
});
```
