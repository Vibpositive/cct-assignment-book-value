$( document ).ready(function() {
    $(".gallery-thumbnails").click(function(){
      console.log("Clickado");
      var src = $(this).attr("src").match(/[^\.]+/) + ".jpg";
      
      $("#gallery-current-image").attr("src", src);

    });
});
