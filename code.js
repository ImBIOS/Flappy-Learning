// Initialize the Neuroevolution
var Neuvol;
var game;
var start = function(){
    Neuvol = new Neuroevolution({
        population:50,
        network:[2, [2], 1],
	});
	//Initialize the game display
    game = new Game();
    game.start();
    game.update();
    game.display();
}

// Initialize the Game start and its needed variable
Game.prototype.start = function(){
this.interval = 0;
this.score = 0;
this.pipes = [];
this.birds = [];

// Span first or next Generation
this.gen = Neuvol.nextGeneration();
for(var i in this.gen){
    var b = new Bird();
    this.birds.push(b)
}
this.generation++;
this.alives = this.birds.length;
// Number of alive birds
}