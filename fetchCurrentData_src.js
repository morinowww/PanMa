const CURRENT_TIME = new Date();
hours = CURRENT_TIME.getHours();
console.log(hours);

async function getCurrentData(){
    const WEATHER_URL = 'ENTER_URL_HERE';
    fetch(WEATHER_URL);
    const RESPONSE = await fetch(WEATHER_URL);
    const DATA = await RESPONSE.json();
    console.log(DATA);
    document.getElementById('info_temp_summary').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].temp_c.toFixed(1) + '\u00b0' + 'C'; 
    document.getElementById('info_heat_summary').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].feelslike_c.toFixed(1) + '\u00b0' + 'C';
    document.getElementById('info_humidity').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].humidity + '%';
    document.getElementById('info_pressure_summary').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].pressure_mb + "mb";
    document.getElementById('info_windDir_summary').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].wind_dir;
    document.getElementById('info_windKPH_summary').innerText = DATA.forecast.forecastday[chosenDate].hour[hours].wind_kph + 'kph';
}

getCurrentData();
