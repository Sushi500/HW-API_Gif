    $("#hero-button").on("click", function() {

      
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=marvel";

      
      $.ajax({
        url: queryURL,
        method: "GET"
      })

      
        .then(function(response) {

        
          var imageUrl = response.data.image_original_url;

          // creating the image
          var hero = $("<img>");
          var heroImage;

          // adding the attribute to image creating
          hero.attr("src", imageUrl);
          hero.attr("alt", "hero image");

          // prepend it to the html
          $("#images").prepend(hero);
        })
        .then(function(){
          console.log("happens after the previous then")
        });
        console.log("outside of the then... it is outside of the timeline for AJAX")
    });