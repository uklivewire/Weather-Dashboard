var API_KEY = "dafdfd598e33c2023aff295bd573dee2";
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=city+'&appid=" + API_KEY;


// Response.name

//add event listener to the search button
$("#mainSearch").on("click", function(event) {
    event.preventDeafault();
    var input = $('#search-input')
    console.log(input.val());
// });

$.ajax({
    URL: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response)
})
});

//display input on textArea containing all the avriables
//loop through last 6 inputs and add buttons for each one
var test = $("#search-input").val();
var city = response.name

//create variables for each parameter ie temp, date, city, wind, humidity
//store users data using localStorage