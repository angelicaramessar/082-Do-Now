$("button").click(function() {
    let weather = $(".weather").val();
 if(weather === "rainy") {
     $(".weather").text("Bring an umbrella!");
 } else {
     $(".weather").text("Enjoy the sun!");
 }
    
    
    
    
});