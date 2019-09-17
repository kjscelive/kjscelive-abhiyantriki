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
		setTimeout(function() {
			glowIcons();
			setTimeout(function() {
				dimIcons();
				// Now glowing the icons forever after 400ms
				setTimeout(function() {
					glowIcons();
					setTimeout(function() {
						dimIcons();
						// Now glowing the icons forever after 400ms
						setTimeout(function() {
							glowIcons();
						}, 70);
					}, 70);
				}, 100);
			}, 200);
		}, 100);
	}());


	/**
	 * This function is used to dim the currently glowing icons.
 	 */
	function dimIcons() {
		retroIcons.each(function(index, element) {
			var sourceImage = $(this).attr("src");
			// Extracting the name of the image to find the dim image
			var match = /^(.*)\/(.*)\.png/.exec(sourceImage);
			// Proceed only if a match is found
			if(match) {
				var basePath = match[1];
				var imageName = match[2];
				// Generating the location of the dim image
				var dimImageSource = `${basePath}/${imageName}-dim.png`;

				$(this).attr("src", dimImageSource);
			}
		});
	}

	/**
	 * This function is used to glow the currently dimmed icons.
 	 */
	function glowIcons() {
		retroIcons.each(function(index, element) {
			var sourceImage = $(this).attr("src");
			// Extracting the name of the image to find the dim image
			var match = /^(.*)\/(.*)\-dim.png/.exec(sourceImage);
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