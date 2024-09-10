function refreshWeather(response){
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature =  response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML =Math.round(temperature);
   
}

function searchCity(city) {
    let apiKey = "31e1eca874t10a80f2783b0fo246b8a5";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
   axios.get(apiUrl).then(refreshWeather);
}


function handleSearchSubmit(event) {
    event.preventDefault();
let searchInput = document.querySelector("#search-input"); 

searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Cape Town");
 