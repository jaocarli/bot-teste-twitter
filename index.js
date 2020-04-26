var Twit = require('twit');

require('dontenv').config();

// Instancie o bot com as chaves no arquivo .env mané
const Bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  
  consumer_secret: process.env.CONSUMER_SECRET,
  
  access_token: process.env.ACESS_TOKEN,
  
  acess_token_secret: process.env.ACESS_TOKEN_SECRET,
  
  timeout_ms: 60 * 1000,

});

console.log('Its aliveeee!')

// Para inicar o bot brábíssmo
function BotInit() {
  var query = {
   
    q: "@reactjs",
    result_type: "recent"

  }

  Bot.get('search/tweets', query, BotGoLatestTweet);

  function BotGoLatestTweet (error, data, response) {
    if (error) {
      console.log('Bot could not find latest tweet, :' + error);

      } else {
        var id = {
          id:data.statuses[0].id_str
        }
      }

      // aqui vai ser retweetado o rolê, fio. confia que vai kkkk
      Bot.post('statuses/retweet/:id', id, BotRetweeted);

      function BotRetweeted(error, response) {
        if (error) {
          console.log('Bot could not retweet, :' + error);

        } else {
          console.log('Bot retweeted:' + id.id);
        }
      }

  }
}

// configurando intervalos de 30min.
setInterval(BotRetweet, 30*60*1000);

// inicializar o bot
BotInit();