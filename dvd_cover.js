const rp = require('request-promise'),
  cheerio = require('cheerio');

const options = {
  uri: `https://dvdcover.com/horizon-zero-dawn-2017-pal-ps4-cover-label/`,
  transform: (body) => {
    return cheerio.load(body);
  }
};
rp(options).then(($) => {
  const ingredients = [];
  console.log($('.featured-image > a > img').attr('src'));
  // console.log($('img').attr('src'));
  // REQUEST SUCCEEDED: DO SOMETHING
}).catch((err) => {
  console.log(err);
});
