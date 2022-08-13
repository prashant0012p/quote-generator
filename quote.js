const Quotes= [
    
    {
      quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
      quoteauthor:"-Nelson Mandela",
      
    },
    {
      quote:"The way to get started is to quit talking and begin doing.",
      quoteauthor:"-Walt Disney"
    },
    {
     quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
     quoteauthor:"-Steve Jobs"
    },
    {
     quote:"If life were predictable it would cease to be life, and be without flavor. ",
     quoteauthor:"-Eleanor Roosevelt"
    },
    {
    quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    quoteauthor:"-Oprah Winfrey",
    },
    {
     quote:"We're all damaged in our own way. Nobody's perfect. I think we're all somewhat screwy. Every single one of us.",
     quoteauthor:"-Johnny Depp",
    },
    {
     quote:"If you can do what you do best and be happy, you're further along in life than most people.",
     quoteauthor:"-Leonardo Dicaprio"
    },
  ];



// function
  function random(){

    let SourceLength = Quotes.length;
    
    //Math method
    let randomNumber = Math.floor(Math.random() * SourceLength); 
    
    
    let newquote = Quotes[randomNumber].quote;
    let newquoteauthor = Quotes[randomNumber].quoteauthor;


    let quotecontainer = document.getElementById('Quote');
    let quotecontainera = document.getElementById('QuoteAuthors');
    quotecontainer.innerHTML =`${newquote}`;
    quotecontainera.innerHTML = `${newquoteauthor}`;

  };