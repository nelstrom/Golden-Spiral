$(document).ready(function() {
  var phi = (1 + Math.sqrt(5))/2;

  $(window).resize(function() {
    var width = $(this).width(),
        height = $(this).height(),
        phi = (1 + Math.sqrt(5))/2;

    if (width/height > phi) {
      // letterbox - use full available height
      var calculated_width = height * phi;
      $("#container > div.cycle")
        .height(height)
        .width(calculated_width);
    } else {
      // panoramic portrait - use full available width
      var calculated_height = width / phi;
      $("#container > div.cycle")
        .width(width)
        .height(calculated_height);
    };
  }).resize();
});
