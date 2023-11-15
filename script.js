const container=document.querySelector('.container');
const search=document.querySelector('.search-box button');
const weather=document.querySelector('.weather');
const weatherdetails=document.querySelector('.weather-details');

search.addEventListener('click', () => {

    const APIkey= 'f452a2c1cc595b075f2869b14bbac3db';
    const city= document.querySelector('.search-box input').value;

   if(city == '')
   return;
 
   fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIkey}').then(response => response.json()).then(json => {
    const image=document.querySelector('.weather img');
    const temperature=document.querySelector('.weather .temperature');
    const description=document.querySelector('.weather .description');
    const human=document.querySelector('.weather-details .human span');
    const wind=document.querySelector('.weather-details .wind span');

    switch(json.weather[0].main) {
        case 'Clear':
            image.src = 'clear-sky.png';
            break;

         case 'Rain':
            image.src = 'rain.png';
            break;
    
        case 'Snow':
            image.src = 'snow.png';
            break;

        case 'Clouds':
            image.src = 'cloudy.png';
            break;

        case 'Mist':
            image.src = 'fog.png';
            break;

        case 'Haze':
            image.src = 'haze.png';
             break;

        default:
            image.src = 'C:\Users\vinay\Downloads\clouds-png-22.png';
        } 
        temperature.innerHTML = '$(parseInt(json.main.temp)}<span>C</span>';
        description.innerHTML = '$(json.weather[0].description}';
        human.innerHTML = '$(json.main.human)%';
        wind.innerHTML = '$(parseInt(json.wind.speed)}Km/h';
   });
});
