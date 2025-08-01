const loader = document.querySelector(".weather-app__loader-container");
const errorInfo = document.querySelector(".weather-app__error-info");

async function getWeatherData() {
  loader.classList.add("js-loader-active");
  let data;
  try {
    const response = await fetch("./weatherAPI/weatherData.json");
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données");
    }
    data = await response.json();
  } catch (error) {
    errorInfo.style.display = "block";
    errorInfo.textContent = error.message;
  } finally {
    loader.classList.remove("js-loader-active");
  }

  populateUI(data[0]);
  console.log(data);
}

getWeatherData();

const tempName = document.querySelector(".weather-app__temp");
const cityName = document.querySelector(".weather-app__city");
const countryName = document.querySelector(".weather-app__country");
const iconeInfo = document.querySelector(".weather-app__info-icon");

function populateUI(data) {
  cityName.textContent = data.city;
  countryName.textContent = data.country;
  tempName.textContent = `${data.temperature}°`;
  iconeInfo.src = `./ressources/icons/${data.iconID}.svg`;
  iconeInfo.style.display = "block";
}
