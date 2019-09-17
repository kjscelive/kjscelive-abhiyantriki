$(function() {
     $('.countdown').downCount({
            date: e(),
            offset: +5
        }, function () {
            alert('WOOT WOOT, done!');
        });
        
        function e() {
            var futureFormattedDate = 10 + "/" + 11 + "/" + 2019 + ' 12:00:00';
            
            return futureFormattedDate;
        }

	var retroIcons				=	$(".glow");

	(function retroAnimate() {
		// Glowing the icons for 200ms
		glowIcons();
		setInterval(() => flickrIcons(), 2500);
	}());

	function flickrIcons() {
		dimIcons();
		setTimeout(() => glowIcons(), 100);
	}


	/**
	 * This function is used to dim the currently glowing icons.
 	 */
	function glowIcons() {
		retroIcons.each(function(index, element) {
			var sourceImage = $(this).attr("src");
			// Extracting the name of the image to find the dim image
			var match = /^(.*)\/(.*)\.png/.exec(sourceImage);
			// Proceed only if a match is found
			if(match) {
				var basePath = match[1];
				var imageName = match[2];
				// Generating the location of the dim image
				var dimImageSource = `${basePath}/${imageName}-glow.png`;

				$(this).attr("src", dimImageSource);
			}
		});
	}

	/**
	 * This function is used to glow the currently dimmed icons.
 	 */
	function dimIcons() {
		retroIcons.each(function(index, element) {
			var sourceImage = $(this).attr("src");
			// Extracting the name of the image to find the dim image
			var match = /^(.*)\/(.*)\-glow.png/.exec(sourceImage);
			// Proceed only if a match is found
			if(match) {
				var basePath = match[1];
				var imageName = match[2];
				// Generating the location of the dim image
				var dimImageSource = `${basePath}/${imageName}.png`;

				$(this).attr("src", dimImageSource);
			}
		});
	}

    
    
})