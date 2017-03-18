/**
 * @Author: vibpositive
 * @Date:   2017-03-18T14:44:27+00:00
 * @Last modified by:   vibpositive
 * @Last modified time: 2017-03-18T20:49:20+00:00
 */

$( document ).ready(function() {
    $(".gallery-thumbnails").click(function(){
      console.log("Clickado");
      var src = $(this).attr("src").match(/[^\.]+/) + ".jpg";

      $("#gallery-current-image").attr("src", src);

    });
});
