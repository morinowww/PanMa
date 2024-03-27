var maxValue = 0;
var chosenDate = 0;

function resetValue(){
    document.getElementById('chart_temp').style.visibility = 'hidden';
    document.getElementById('chart_temp').style.display = 'none';
    document.getElementById('chart_heat').style.visibility = 'hidden';
    document.getElementById('chart_heat').style.display = 'none';
    document.getElementById('chart_precipitation').style.visibility = 'hidden';
    document.getElementById('chart_precipitation').style.display = 'none';
    document.getElementById('chart_wind').style.visibility = 'hidden';
    document.getElementById('chart_wind').style.display = 'none';

}

function change_label(clicked_id){
    document.getElementById('chart_select_temperature').style.textDecoration = 'none';
    document.getElementById('chart_select_heat_index').style.textDecoration = 'none';
    document.getElementById('chart_selec_precipitation').style.textDecoration = 'none';
    document.getElementById('chart_select_wind').style.textDecoration = 'none';
    document.getElementById('chart_temp').style .visibility = 'hidden'
    document.getElementById('chart_heat').style .visibility = 'hidden'
    document.getElementById('chart_precipitation').style .visibility = 'hidden'
    document.getElementById('chart_wind').style .visibility = 'hidden'
    document.getElementById(clicked_id).style.textDecoration = 'underline';
    var chartToShow = clicked_id
    if (chartToShow == 'chart_select_temperature'){
        resetValue();
        document.getElementById('chart_temp').style.visibility = 'visible';
        document.getElementById('chart_temp').style.display = 'block';
        console.log(clicked_id);
    }
    else if(chartToShow == 'chart_select_heat_index'){
        console.log(chartToShow)
        resetValue();
        document.getElementById('chart_heat').style.visibility = 'visible';
        document.getElementById('chart_heat').style.display = 'block';

    }
    else if (chartToShow == 'chart_selec_precipitation'){
        console.log(chartToShow)
        resetValue();
        document.getElementById('chart_precipitation').style.visibility = 'visible';
        document.getElementById('chart_precipitation').style.display = 'block';

    }
    else if (chartToShow == 'chart_select_wind'){
        console.log(chartToShow)
        resetValue();
        document.getElementById('chart_wind').style.visibility = 'visible';
        document.getElementById('chart_wind').style.display = 'block';
    }
}

async function getCurrentChartData(){
    const WEATHER_URL = 'http://api.weatherapi.com/v1/forecast.json?key=c6fef7cd05fd438685883103231004&q=Caloocan&days=10&aqi=no&alerts=no';
    fetch(WEATHER_URL);
    const RESPONSE = await fetch(WEATHER_URL);
    const DATA = await RESPONSE.json();
    maxValue = 0;
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        var elementId = 'temp_chart_time';
        elementId = elementId + chartIterator;
        document.getElementById('temp_chart_time' + chartIterator).innerText = DATA.forecast.forecastday[chosenDate].hour[chartIterator].temp_c.toFixed(1);
        if (document.getElementById('temp_chart_time' + chartIterator).innerText > maxValue){
            maxValue = parseInt(document.getElementById('temp_chart_time' + chartIterator).innerText, 10);
            console.log('temp'+maxValue+'run'+chartIterator) 
        }
    }
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        heightPercentage = document.getElementById('temp_chart_time' + chartIterator).innerText / (maxValue + 10) * 100 + '%';
        document.getElementById('temp_chart_box' + chartIterator).style.height = heightPercentage;
        document.getElementById('temp_chart_time24').innerText = DATA.forecast.forecastday[chosenDate].hour[0].temp_c.toFixed(1);
        document.getElementById('temp_chart_box24').style.height = (document.getElementById('temp_chart_time24').innerText / (maxValue + 10)) * 100 + '%';
    }
    maxValue = 0;
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        var elementId = 'heat_chart_time';
        elementId = elementId + chartIterator;
        document.getElementById('heat_chart_time' + chartIterator).innerText = DATA.forecast.forecastday[chosenDate].hour[chartIterator].heatindex_c.toFixed(1);
        if (document.getElementById('heat_chart_time' + chartIterator).innerText > maxValue){
            maxValue = parseInt(document.getElementById('heat_chart_time' + chartIterator).innerText, 10);
            console.log('heat'+maxValue+'run'+chartIterator) 
        }
    }
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        heightPercentage = document.getElementById('heat_chart_time' + chartIterator).innerText / (maxValue + 10) * 100 + '%';
        document.getElementById('heat_chart_box' + chartIterator).style.height = heightPercentage;
        document.getElementById('heat_chart_time24').innerText = DATA.forecast.forecastday[chosenDate].hour[0].temp_c.toFixed(1);
        document.getElementById('heat_chart_box24').style.height = document.getElementById('heat_chart_time24').innerText / (maxValue + 10 ) * 100 + '%';
    }
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        var elementId = 'precipitation_chart_time';
        elementId = elementId + chartIterator;
        document.getElementById('precipitation_chart_time' + chartIterator).innerText = DATA.forecast.forecastday[chosenDate].hour[chartIterator].precip_mm.toFixed(1);
        maxValue = 0;
        if (document.getElementById('precipitation_chart_time' + chartIterator).innerText > maxValue){
            maxValue = parseInt(document.getElementById('precipitation_chart_time' + chartIterator).innerText, 10);
            console.log('precipmax' + maxValue) 
        }
    }
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        heightPercentage = (document.getElementById('precipitation_chart_time' + chartIterator).innerText/ (maxValue + 3)) * 100 + '%';
        document.getElementById('precipitation_chart_box' + chartIterator).style.height = heightPercentage;
        document.getElementById('precipitation_chart_time24').innerText = DATA.forecast.forecastday[chosenDate].hour[0].precip_mm.toFixed(1);
        document.getElementById('precipitation_chart_box24').style.height = (document.getElementById('precipitation_chart_time24').innerText / (maxValue + 3)) * 100 + '%';

    }
    maxValue = 0;
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        var elementId = 'precipitation_chart_time';
        elementId = elementId + chartIterator;
        document.getElementById('wind_dir_chart_time' + chartIterator).innerText = DATA.forecast.forecastday[chosenDate].hour[chartIterator].wind_dir;
        document.getElementById('wind_dir_chart_time24').innerText = DATA.forecast.forecastday[1].hour[0].wind_dir;
        document.getElementById('wind_speed_chart_time' + chartIterator).innerText = DATA.forecast.forecastday[chosenDate].hour[chartIterator].wind_kph.toFixed(1);
        if (document.getElementById('wind_speed_chart_time' + chartIterator).innerText > maxValue){
            maxValue = parseInt(document.getElementById('wind_speed_chart_time' + chartIterator).innerText, 10);
            console.log('maxwindspeed' + maxValue + 'run' + chartIterator); 
        }
    }
    for (chartIterator = 0; chartIterator < 23; chartIterator += 2){
        heightPercentage = document.getElementById('wind_speed_chart_time' + chartIterator).innerText / (maxValue + 10) * 100 + '%';
        document.getElementById('wind_chart_box' + chartIterator).style.height = heightPercentage;
        document.getElementById('wind_speed_chart_time24').innerText = DATA.forecast.forecastday[1].hour[0].wind_kph.toFixed(1);
        document.getElementById('wind_chart_box24').style.height = document.getElementById('wind_speed_chart_time24').innerText / (maxValue + 10) * 100 + '%';
    }


}

function selectDateSelector(clicked_id){
    chosenDate = clicked_id.replace(/[^0-9]/g, '')
    console.log(chosenDate)
    for (itiratorS = 0; itiratorS < 9; itiratorS++){
        documentId = 'date' + itiratorS;
        document.getElementById(documentId).style.textDecoration = 'none';
    }
    document.getElementById("date" + chosenDate).style.textDecoration = 'underline'
    getCurrentChartData();
}

getCurrentChartData();

