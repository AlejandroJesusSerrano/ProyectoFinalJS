
const currentWeatherEl = document.getElementById('apisContainer')

function loadWeather()
{
    fetch("https://api.openweathermap.org/data/2.5/weather?id=3863502&lang=sp&units=metric&appid=4713fa4ed0318d4221ba53070c6b44b0")
    .then((response)=>response.json())
    .then((data)=>showWheather(data))
};

function showWheather(data)
{
    const div = document.getElementById('apisContainer');
    const{weather, main} = data; 
    const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
   
    const currentWheather = document.createElement('div');
    currentWheather.innerHTML=`<div class="container">
                            <div><h4>Clima</h4></div>
                            <div class="container-fluid"><img class="icons" src=${icon} alt=${weather[0]["main"]}></div>
                            <div>${weather[0]["main"]}</div>
                            <div>${weather[0]["description"]}</div>
                        </div>
                        <div class="container">
                            <div class="container row"><h4>Temperatura</h4>
                            <div><p class="paragraph">Temperatura actual: ${Math.round(main.temp)}<sup>ºC</sup></p></div>
                            <div><p class="paragraph">Sensacion tèrmica: ${Math.round(main.feels_like)}<sup>ºC</sup></p></div>
                            <div><p class="paragraph">Màxima prevista: ${Math.round(main.temp_max)}</p><sup>ºC</sup></div>
                            <div><p class="paragraph">Mìnima prevista: ${Math.round(main.temp_min)}</p><sup>ºC</sup></div>
                        </div>`
    div.appendChild(currentWheather);
};