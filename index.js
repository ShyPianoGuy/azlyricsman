const request = require('request');
const cheerio = require('cheerio');

module.exports = function lyrics(query) {
    return new Promise((resolve, reject) => {
        if(!query) reject('You must input a song name to search');
        request('https://search.azlyrics.com/search.php?q='+query.replace(/\s/g, '+'), function (err, body, res) {
            const $ = cheerio.load(res);
            let lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(2).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(1).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(0).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) reject('No songs found');
            request(lyricLink, function (er, bod, re) {
                const o = cheerio.load(re);
                let artist = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(4).text().replace('Lyrics', '').replace('\n', '').replace('\n', '');
                let song = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(3).text().replace('lyrics', '').replace('"', '').replace('"', '');
                let lyrics = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(6).text();
                let info = {
                    'lyrics': lyrics,
                    'artist': artist,
                    'title': song
                };
                resolve(info);
            });
        });
    });
};
