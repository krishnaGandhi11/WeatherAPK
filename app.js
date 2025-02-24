let lol = document.querySelector("#Icon1");

const getWeatherFun =async function getWeather(city) {
    // const city = document.getElementById('city').value;
    const apiKey = '358ca72d3b014d23bd5103732250102';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            // document.getElementById('weather-result').innerHTML = `
            
            // `;

            lol.setAttribute("src",data.current.condition.icon);
			dCity.innerHTML = data.location.name;
			dCity1.innerHTML = data.location.name;
			dRegion.innerHTML = data.location.region;
			dCountry.innerHTML = data.location.country;
			tempInC.innerHTML = data.current.temp_c;
			tempInC2.innerHTML = data.current.temp_c;
			tempInF.innerHTML = data.current.temp_f;
			dCondition.innerHTML = data.current.condition.text;
            
			// dIcon.innerHTML = data.current.condition.icon;
			dHumidity.innerHTML = data.current.humidity;
			dHumidity2.innerHTML = data.current.humidity;
			dWindInKph.innerHTML = data.current.wind_kph;
			dWindInKph2.innerHTML = data.current.wind_kph;
			dWindInmph.innerHTML = data.current.wind_mph;
			dpressure.innerHTML = data.current.pressure_in;
			dLastUpdated.innerHTML = data.current.last_updated;
	

  
			// console.log(data.current.condition.icon);
            return data.location.name;
        })
        .catch(error => {
            document.getElementById('weather-result').innerHTML = `<p>City not found. Try again!</p>`;
        });
}

// http://api.weatherapi.com/v1/current.json?key=${bd71f5e078374696bc570443250102}&q=${Rohtak}&aqi=yes

let submit = document.querySelector("#submit");
let inp = document.querySelector("#cityyy");

submit.addEventListener("click",async (e) =>{
    e.preventDefault();
	let linki = await getWeatherFun(inp.value);
    console.log(linki);
});

// Function to handle Quick Checks
function quickCheck(city) {
    getWeatherFun(city); // Calls your existing function to fetch and display weather data
}


getWeatherFun("New Delhi");








