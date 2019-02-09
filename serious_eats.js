const rp = require('request-promise'),
  cheerio = require('cheerio');

const options = {
  uri: `https://www.seriouseats.com/recipes/2015/07/the-food-lab-southern-fried-chicken-recipe.html`,
  transform: (body) => {
    return cheerio.load(body);
  }
};
rp(options).then(($) => {
  const ingredients = [];
  $('.ingredient').each((i, element) => {
    ingredients.push($(element).text());
  });
  console.log(ingredients);
  // REQUEST SUCCEEDED: DO SOMETHING
}).catch((err) => {
  console.log(err);
});
