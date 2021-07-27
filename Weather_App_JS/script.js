document.querySelector(".busca").addEventListener("submit", async (event) => {
  event.preventDefault();

  let input = document.querySelector("#searchInput").value;

  if (input !== "") {
    clearInfo();
    showWarning('Loading...');

    let url : `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid={ app_id }&units=metric&lang=en`;
    let results = await fetch(url);
    let json = await results.json();

    if (json.cod === 200) {
      showInfo({
        name: json.name,
        country: json.sys.country,
        temp: json.main.temp,
        tempf: (json.main.temp * 1.8 + 32).toFixed(2),
        tempIcon: json.weather[0].icon,
        weatherName: json.weather[0].main,
        windSpeed: json.wind.speed,
        windAngle: json.wind.deg,
      });
    } else {
      clearInfo();
      showWarning("Location not Found.");
    }
  } else {
    clearInfo();
  }
});

function showInfo(json) {
  showWarning("");
  document.querySelector(".titulo").innerHTML = `${json.name}, ${json.country}`;
  document.querySelector(".tempInfo").innerHTML = `${json.temp} <sup>°C</sup>`;
  document.querySelector(".tempFInfo").innerHTML = `${json.tempf}°F`;
  document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} <span>km/h</span>`;
  document.querySelector(".temp img").setAttribute("src",
      `http://openweathermap.org/img/wn/${json.tempIcon}@2x.png`
    );
  document
    .querySelector(".temp img")
    .setAttribute("alt", `${json.weatherName}`);
  document.querySelector(".ventoPonto").style.transform = `rotate(${
    json.windAngle - 90
  }deg)`;

  document.querySelector(".resultado").style.display = "block";
};

function clearInfo() {
  showWarning("");
  document.querySelector(".resultado").style.display = "none";
};

function showWarning(message) {
  document.querySelector('.aviso').innerHTML = message;
};
