$(document).ready(function() {
	var phi = (1 + Math.sqrt(5))/2;

	$(window).resize(function() {
		var goldenWidth, goldenHeight,
			windowWidth  = $(this).width(),
			windowHeight = $(this).height();

		if (windowWidth/windowHeight > phi) {
			// panoramic - use full height
			goldenWidth  = windowHeight * phi;
			goldenHeight = windowHeight;
		} else {
			// portrait  - use full width
			goldenWidth  = windowWidth;
			goldenHeight = windowWidth / phi;
		};

		$("#container > div.cycle")
			.width(goldenWidth)
			.height(goldenHeight);
	}).resize();

});
