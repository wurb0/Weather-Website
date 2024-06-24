//const apiKey = "5fdbba21ce9ccd27ffa8392103285bf1";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=dubai";

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?appid=5fdbba21ce9ccd27ffa8392103285bf1&units=metric&q=";

async function checkWeather() {
  var city = "cairo";
  const repsonse = await fetch(apiUrl + city);
  var data = await repsonse.json();

  console.log(data);
}

checkWeather();
