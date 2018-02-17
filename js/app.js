
	/**
	 *  Here we have my nerdy quotes
	 */
	var quotes = [
		{
			quote: "I think if you do something and it turns out pretty good, then you should go do something else wonderful, not dwell on it for too long. Just figure out what’s next.",
			source: "Steve Jobs",
			citation: "NBC, Nightly News",
			year: 2006,
			tags: "Apple, Technology, News"
		},
		{
			quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
			source: "Albert Einstein",
			tags: "Historical, The Universe"
		},
		{
			quote: "Lou. Give me a milk... Chocolate.",
			source: "George McFly",
			citation: "Back to the Future",
			year: 1985,
			tags: "Film, Fiction"
		},
		{
			quote: "Chewie, we're home.",
			source: "Han Solo",
			citation: "Star Wars: The Force Awakens",
			year: 2015,
			tags: "Film, Fiction"
		},
		{
			quote: "What's up? Ladies and Gentlemen of Youtube; Boogie 2988 coming at you live, from the power of the internet.",
			source: "Boogie2988",
			citation: "Youtube - Boogie2988",
			tags: "Video, Internet, Youtube"
		}	
	];
	
	
	var colors = [
		"red", "green", "cyan", "crimson", "coral", "deeppink", "fuchsia", "greenyellow","lawngreen", "lightskyblue"
	];
	
	
	var applyRandomBackground = function () {
		
		/**
		 * Fix the ceiling, because the array starts with 0
		 */
		 var color_length_fix = colors.length - 1;
		 
		/**
		 * Select color
		 */
		var the_color = _.random( 0, color_length_fix );
		the_color = colors[the_color];  //  select array by index;
		
		$("body").css("background-color", the_color);
	}
	
	var getRandomQuote = function () {
		
		/**
		 * Fix the ceiling, because arrays start with 0
		 */
		var quote_length_fix = quotes.length - 1;
		
		/**
		 * Use underscore to generate a random number, within our range
		 */
		var quote_item_select = _.random( 0, quote_length_fix );
		
		/**
		 * Output select quote
		 */
		return quotes[quote_item_select];
		
		
	}
	
	
	var printQuote = function () {
		
		/**
		 * Get our random quote data
		 */
		 var the_quote = getRandomQuote();


		/**
		 * We're using the same css and html template...
		 * Therefore, we adding an empty class, so-to hide the :before and :after css elements.
		 * Also - only printing if the value is set. Otherwise, printing null.
		 */
		
		
		if ( the_quote.quote ) {
			$("#quote-box .quote").text( the_quote.quote );
			$("#quote-box .quote").show();
		} else {
			$("#quote-box .quote").text("");
			$("#quote-box .quote").hide();
			
		}
		
		if ( the_quote.source ) {
			$("#quote-box .source_actual").text( the_quote.source );			
			$("#quote-box .source_actual").show();
		} else {
			$("#quote-box .source_actual").text("");
			$("#quote-box .source_actual").hide();
		}
		
		if ( the_quote.citation ) {
			$("#quote-box .citation").text( the_quote.citation );
			$("#quote-box .citation").show();
		} else {
			$("#quote-box .citation").text("");
			$("#quote-box .citation").hide()
		}
		
		if ( the_quote.year ) {
			$("#quote-box .year").text( the_quote.year );
			$("#quote-box .year").show();
		} else {
			$("#quote-box .year").text("");
			$("#quote-box .year").hide();
		}
		
		if ( the_quote.tags ) {
			$("#quote-box .tags").text( the_quote.tags );
			$("#quote-box .tags").show();
		} else {
			$("#quote-box .tags").text("");
			$("#quote-box .tags").hide();
		}
		
	}
	
	
	
	
	
	var lazyInterval;  //  here's where we store our interval ID, for lazyCheck
	
	var lazyCheck = function () {
		
		/**
		 * Every 30 seconds, fire iteration method
		 */
		lazyInterval = setInterval( function () {
			fireMethod();
		}, 30000);
		
		
	}
	
	
	
	
	var fireMethod = function () {
		
		
		printQuote();
		applyRandomBackground();
		clearInterval( lazyInterval );  //  reset the interval (lazyCheck)
		lazyCheck();  //  restart interval
	}
	
	/**
	 * This is our jquerified click function
	 */
	$("#loadQuote").click( function () {
		fireMethod();
	})
	
	/**
	 * On load, run the script!
	 */
	 $(document).ready(function(){
		fireMethod();
		lazyCheck();
	});
