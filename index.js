//const apiKey = "5fdbba21ce9ccd27ffa8392103285bf1";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=dubai";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=5fdbba21ce9ccd27ffa8392103285bf1&units=metric&q=";

document
  .querySelector("#search input")
  .addEventListener("keypress", function (event) {
    // Check if the key pressed was Enter (key code 13)
    if (event.keyCode === 13) {
      // Call the checkWeather function with the input field's value
      checkWeather(this.value);
    }
  });

const icon = document.querySelector("#weather-icon");

async function checkWeather(city) {
  const repsonse = await fetch(apiUrl + city);
  var data = await repsonse.json();

  console.log(data);

  document.querySelector("#city").innerHTML = data.name;
  document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML = data.main.humidity + "%";
  document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";

  console.log(temp);
  console.log(humidity);

  if (data.weather[0].main == "Clouds") {
    icon.src = "images/clouds.png";
  } else if (data.weather[0] == "Clear") {
    icon.src = "images/clear.png";
  } else if (data.weather[0] == "Rain") {
    icon.src = "images/rain.png";
  } else if (data.weather[0] == "Drizzle") {
    icon.src = "images/drizzle.png";
  } else if (data.weather[0] == "Mist") {
    icon.src = "images/mist.png";
  }
}

checkWeather("dubai");
