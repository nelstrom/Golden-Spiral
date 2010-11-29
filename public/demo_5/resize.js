$(document).ready(function() {
  var phi = (1 + Math.sqrt(5))/2;

  $(window).resize(function() {
    var goldenWidth  = windowWidth  = $(this).width(),
        goldenHeight = windowHeight = $(this).height();

    if (windowWidth/windowHeight > phi) {
      // panoramic viewport - use full height
      goldenWidth  = windowHeight * phi;
    } else {
      // portrait viewport  - use full width
      goldenHeight = windowWidth / phi;
    };

    $("#container > div.cycle")
      .width(goldenWidth)
      .height(goldenHeight);

  }).resize();

});
