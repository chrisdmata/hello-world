$(document).ready(function(){
	var randQuote;
	var randAuthor;
	var rand;
	getQuote();
	function getQuote(){

		//store quotes and authors in two arrays. Same index=corresponding elements
		var quotes = ["Freedom is a state of mind.", "To him whom much is given, much is required.", "Luck is no chance, it's toil. Fortune's expensive smile is earned.", "We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt.", "Ever loved someone so much you would do anything for them? Yeah, well, make that someone youself and do whatever the hell you want.", "No man ever steps in the same river twice, for it is not the same river, and he is not the same man.", "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.", "I don't have the time or the crayons to explain this to you right now.", "Worry is a misuse of imagination", "Sometimes the best way to solve your own problems is to help someone else."];
		var author= ["-Unknown Author", "-Unknown Author", "-Unknown Author", "-Interstellar", "-Harvey Specter","Heraclitus", "Aldous Huxley", "-Unknown Stranger", "-Unknown author", "-Iroh"];

		//create a random number and use it as an index to select a random quote from arrays above
		rand = Math.floor(Math.random() * quotes.length);
		randQuote = quotes[rand];
		randAuthor = author[rand];

		//target .quote and .author classes in index.html file
		$(".quote").text(randQuote);
		$(".author").text(randAuthor);
	}

	//target the tweet button in index.html to open twitter, and insert quote/author into url
	$("#tweet").on("click", function(){
		window.open("https://twitter.com/intent/tweet?text="+randQuote + " " + randAuthor);
	});

	//target the newQuote button to call getQuote() when clicked
	$("#newQuote").on("click", function(){
		getQuote();
	});

	
});