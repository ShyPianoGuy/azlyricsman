const request = require('request');
const cheerio = require('cheerio');

class Lyrics {
    /**
      * Get some lyrics
      * @param {String} query Query you selected/searched
      * @returns {Promise<String>} The lyrics the API provided.
      **/
    async get(query) {
       await request(`https:///search.azlyrics.com/search.php?q=${query.replace(/\s/g, "+")}`, (err, body, res) => {
            const $ = cheerio.load(res);
            let lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(2).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(1).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) lyricLink = $('div.col-xs-12.col-sm-offset-1.col-md-8.col-md-offset-2.text-center').find('div.panel').eq(0).find('td.text-left.visitedlyr').find('a').eq(0).attr('href');
            if(lyricLink === undefined) return "No lyrics found.";
           
            request(lyricLink, (e, ress, uwu) => {
                let artistt = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(4).text().replace('Lyrics', '').replace('\n', '').replace('\n', '');
                let sung = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(3).text().replace('lyrics', '').replace('"', '').replace('"', '');
                let lyrics = o('div.col-xs-12.col-lg-8.text-center').find('div').eq(6).text();
                
                const info = {
                     lyric: lyrics,
                     song: sung,
                     artist: artistt
                };
                
                return info;
            });
       });
    }
}

module.exports = Lyrics;
