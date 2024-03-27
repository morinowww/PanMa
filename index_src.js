//Time Variables
var day;
var month;
var year;
var hours;
var minutes;
var seconds;
const MONTHS = ["Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo",
"Hulyo", "Agosto", "Setyembre", "Octubre", "Nobyembre", "Disyembre"];
const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


function getDate(){
    const CURRENT_DATE = new Date();

    day = CURRENT_DATE.getDate();
    var numerical_month = CURRENT_DATE.getMonth();
    month = MONTHS[numerical_month];
    year = CURRENT_DATE.getFullYear(); 

    document.getElementById('id_header_time_month').innerText = month;
    document.getElementById('id_header_time_day').innerText = day;
    document.getElementById('id_header_time_year').innerText = year;
}
function getTime(){
    const CURRENT_TIME = new Date();

    hours = CURRENT_TIME.getHours();
    minutes = CURRENT_TIME.getMinutes();
    seconds = CURRENT_TIME.getSeconds();

    document.getElementById('id_header_time_hours').innerText = ("0" + hours).slice(-2);
    document.getElementById('id_header_time_minutes').innerText = ("0" + minutes).slice(-2);
    document.getElementById('id_header_time_seconds').innerText = ("0" + seconds).slice(-2);
}
function setDateDateSelector(){
    const DATESELECTOR = new Date();
    day = DATESELECTOR.getDate();


    for (i = 0; i < 10; i++){
        const today = new Date();
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        document.getElementById('sMon' + i).innerText = MONTHS_SHORT[nextDay.getMonth()];
        document.getElementById('sDay' + i).innerText = nextDay.getDate();
    }
        
}


setDateDateSelector();
setInterval(getDate, 1000)
setInterval(getTime, 1000)
