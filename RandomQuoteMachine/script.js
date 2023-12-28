const colors = [
    'rgb(23,56,123)',
    'rgb(0, 33, 71)',
    'rgb(222, 184, 135)',
    'rgb(56,89,111)',
    'rgb(222,111,0)',
    'rgb(6,89,23)',
    'rgb(255, 140, 105)',
    'rgb(205, 92, 92)',
    'rgb(218, 165, 32)',
    'rgb(122, 18, 100)'
];

const quotes = [
    {text: "I think we all get to decide what good and bad and right and wrong mean to us, not what we're told to accept", author: "Holly Jackson"},
    {text: "If you change the way you look at things, the things you look at change", author: "Wayne Dyer"},
    {text: "Don't waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy", author: "Roy T. Bennett"},
    {text: "Secrets are like shadows. They follow you everywhere, always hiding just out of reach", author: "Jennifer Lynn Barnes"},
    {text: "In the end, we only regret the chances we didn't take", author: "Lewis Carroll"},
    {text: "You make a life out of what you have, not what you're missing", author: "Kate Morton"},
    {text: "No matter what life throws at you, what you make out of it is up to you", author: "Sadhguru"},
    {text: "Happiness can be found, even in the darkest of times, if one remembers to turn on the light", author: "J.K. Rowling"},
    {text: "It is our choices that show what we truly are, far more than our abilities", author: "J.K. Rowling"},
    {text: "All art is a kind of confession", author: "James Baldwin"},
    {text: "Poetry is when an emotion has found its thought, and the thought has found words", author: "Robert Frost"},
    {text: "Vision without execution is just hallucination", author: "Henry Ford"},
    {text: "Just because something didn't do what you planned it to do doesn't mean it's useless", author: "Thomas Edison"},
    {text: "I have not failed, I've just found 10000 ways that won't work", author: "Thomas Edison"},
    {text: "People should be interested in books, not their authors", author: "Agatha Christie"},
    {text: "You can't edit a blank page", author: "Jodi Picoult"},
    {text: "If we are true to ourselves, we cannot be false to anyone", author: "William Shakespeare"},
    {text: "Expectation is the root of all heartache", author: "William Shakespeare"},
    {text: "Description begins in the writer's imagination, but should finish in the reader's", author: "Stephen King"},
    {text: "Recovering from suffering is not like recovering from a disease. Many people don't come out healed; they come out different", author: "David Brooks"},
    {text: "Having perfected our disguise, we spend our lives searching for someone we don't fool", author: "Robert Brault"},
    {text: "When people are divided, the only solution is agreement", author: "John Hume"},
    {text: "Imagination is more important than knowledge", author: "Albert Einstein"},
    {text: "Where there is love, there is life", author: "Mahatma Gandhi"},
    {text: "Science is organized knowledge, wisdon is organized life", author: "Immanuel Kant"},
    {text: "Give a girl the right shoes and she can conquer the world", author: "Marilyn Monroe"}
    //{text: "", author: ""}
];

var currentQuote = '';
var currentAuthor = '';

function getRandomQuote(){
     return quotes[Math.floor(Math.random() * quotes.length)];
}

function getQuote(){
    let randomQuote = getRandomQuote();
    currentQuote = randomQuote.text;
    currentAuthor = randomQuote.author;
    //adjusting tweet button attribute
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text='+encodeURIComponent('"'+currentQuote+'" '+currentAuthor));
    $('#share-quote').attr('href', 'https://wa.me/?text='+encodeURIComponent('"'+currentQuote+'" '+currentAuthor));
    //set quote and author text
    $('#text').animate({opacity: 0}, 500, function(){
        $(this).animate({opacity: 1}, 500);
        $('#text').text('“'+currentQuote+'”.');
    });
    $('#author').animate({opacity: 0}, 500, function(){
        $(this).animate({opacity: 1}, 500);
        $('#author').text('- '+currentAuthor);
    });
    //changing the colors
    var color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

$(document).ready(function() {
    getQuote();
    $('#new-quote').on('click',getQuote);
});


