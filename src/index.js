function refreshWeather(response){
    let temperatureElement = document.querySelector("#current-temperature");
    let temperature =  response.data.temperature.current;
    let cityElement = document.querySelector("#current-city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

console.log(response.data);

    iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="emoji"/>`;
    cityElement.innerHTML = response.data.city;
    timeElement.innerHTML = formatDate(date);
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML =Math.round(temperature);
   
}

function formatDate(date) {
    
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];

    if (minutes < 10){
        minutes =`0${minutes}`
    }

  return `${day}  ${hours}:${minutes}`
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

searchCity("Polokwane");
 
function getForecast(city){
    let apiKey = "31e1eca874t10a80f2783b0fo246b8a5";
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
   axios(apiUrl).then(displayForecast);
    console.log(apiUrl);
}

getForecast("Polokwane");

function displayForecast(response){
    console.log(response.data);

let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
let forecastHtml = "";

days.forEach(function (day) {
forecastHtml = 
forecastHtml + 
`
<div class="weather-forecast-day">
<div class="weather-forecast-date">${day}</div>
<div class="weather-forecast-icon">🌦️</div>
<div class="weather-forecast-temperature">
<div class="weather-forecast-temperature"><strong>25°C</strong></div>
<div class="weather-forecast-temperature">9°C</div>
</div>
</div>
`;
});

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;}


