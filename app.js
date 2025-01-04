const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" ;
const apiKey = "&appid=73ab5e7cc451e56eddf946f0492d04d3&units=metric" ;

const type = document.querySelector( ".search_bar" ) ;
const btn = document.querySelector( ".search_icon" ) ;
const airSpeed = document.querySelector( ".air_speed" ) ;
const humidity = document.querySelector( ".humidity" ) ;
const temp = document.querySelector( ".main_logo h1") ;
const city = document.querySelector( ".main_logo h2") ;
const logo = document.querySelector( ".main_logo img") ;

async function callApi() {
    try{
        let cityName = type.value ;
        let data = await axios.get( apiUrl+cityName+apiKey ) ;
        let value = data.data ;
        let main = value.main ;
        let wind = value.wind ;
        let weather = value.weather[0].description ;
        console.log( weather ) ;
        city.innerHTML = cityName ;
        temp.innerHTML = Math.round( main.temp ) + "°C" ;
        humidity.innerHTML = main.humidity + "%" ;
        airSpeed.innerHTML = wind.speed + "km/h" ;
        
        if ( weather == "clear sky" ) {
            logo.src = "images\\clear.png" ;
        } else if ( weather == "mist" ) {
            logo.src = "images\\mist.png" ;
        } else if ( weather == "snow" ) {
            logo.src = "images\\snow.png" ;
        } else if ( weather == "rain" ) {
            logo.src = "images\\rain.png" ;
        } else if ( weather == "drizzle" ) {
            logo.src = "images\\drizzle.png" ;
        } else if ( weather == "snow" ) {
            logo.src = "images\\snow.png" ;
        } else if ( weather == "clouds" ) {
            logo.src = "images\\clouds.png" ;
        } ;
    } catch ( err ) {
        console.log( err ) ;
    }

    type.value = "" ;
}

// async function ifElse() {
//     if ( weather == "clear sky" ) {
//         logo.src = "images\\clear.png" ;
//     } else if ( weather == "mist" ) {
//         logo.src = "images\\mist.png" ;
//     } else if ( weather == "snow" ) {
//         logo.src = "images\\snow.png" ;
//     } else if ( weather == "rain" ) {
//         logo.src = "images\\rain.png" ;
//     } else if ( weather == "drizzle" ) {
//         logo.src = "images\\drizzle.png" ;
//     } else if ( weather == "snow" ) {
//         logo.src = "images\\snow.png" ;
//     } else if ( weather == "clouds" ) {
//         logo.src = "images\\clouds.png" ;
//     } ;
// }

btn.addEventListener( "click", () => {
    callApi() ;
} ) ;