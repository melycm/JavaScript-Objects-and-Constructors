// Card Constructor
function Card(point, suit){
    this.point = point;
    this.suit = suit;
}

// getImageUrl()
Card.prototype.getImageURL = function(){
    var whatCard = this.point;

    if (this.point === 1){
        whatCard = "A";
    }
    else if (this.point === 11){
        whatCard = "J";
    }
    else if (this.point === 12){
        whatCard = "Q";
    }
    else if (this.point === 13){
        whatCard = "K";
    }

    var whatSuit = this.suit;

    if (this.suit == "hearts"){
        whatSuit = "H"
    }
    else if (this.suit == "diamonds"){
        whatSuit = "D"
    }
    else if (this.suit == "spades"){
        whatSuit = "S"
    }
    else if (this.suit == "clubs"){
        whatSuit = "C"
    }
    return 'cards/ ${pointURL} ${suitURL} .jpg';
};

// Hand constructor
function Hand() {
    this.hand =[];
}

Hand.prototype.addCard = function(card){
    this.hand.push(card);
};
Hand.prototype.numCards = function(){
    return this.hand.length;
};
Hand.prototype.firstCard = function(){
    return this.hand[0];
};
Hand.prototype.addCard = function(card) {
    this.Hand.push(card);
}

Hand.prototype.getPointsCards = function() {
    var self = this;
    var points = self.Hand.map(function(element) {
        return element.point;
    });
    points.reduce(function(a, b) {
        return a + b;
    }, 0);
}

// Deck constructor
function myDeck() {
    this.deck = [];
}

myDeck.prototype.draw = function() {
    let cardIndex = Math.floor(Math.random() * deck.length);
    var randomCard = deck[cardIndex];
    randomCard.splice(cardIndex, 1);
    return randomCard;
}

myDeck.prototype.shuffle = function() {
    for (var i = this.deck.length - 1; i > 0; i--) {
        var n = Math.floor(Math.random() * (i + 1));
        var temp = this.deck[i];
        this.deck[i] = this.deck[n];
        this.deck[n] = temp;
    }
    return this.deck;
}

myDeck.prototype.numCardsLeft = function() {
    return this.deck.length;
}