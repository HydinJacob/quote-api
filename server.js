const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');
const { generateId } = require('./utils');

const PORT = process.env.PORT || 4001;


app.use(express.static('public'));


app.listen(PORT, () => {    
    console.log('Server Started Running!!');
});

app.get('/api/quotes/random', (req, res, next) => {

    const quoteRandom = getRandomElement(quotes);    
    res.send({ quote: quoteRandom });

});

app.get('/api/quotes', (req, res, next) => {

    if (req.query.person !== undefined) {
      const quotesByPerson = quotes.filter(quote => quote.person === req.query.person);
      res.send({ quotes: quotesByPerson });
    } 

    else{
        const allResult = [];
        for( let i=0; i< quotes.length; i++) {
            allResult.push(quotes[i])
        }    
        res.send({quotes: allResult}); 
        // res.send( { quotes: quotes })
    }    
  });

  app.post('/api/quotes', (req, res, next) => {
      const newQuote = {
          quote: req.query.quote,
          person: req.query.person
      }
     
      if(newQuote.quote && newQuote.person)
      {
          quotes.push(newQuote);
          res.send({quote: newQuote});
      }
      else if(newQuote.quote == null || newQuote.person == null){
          res.status(400).send('Please enter the data');
      }
  });

  
  





