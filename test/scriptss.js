// Get references to the buttons
const lightsBtn = document.getElementById('lights');
const darksBtn = document.getElementById('darks');
const container = document.querySelector('.container');

// Event listener for light theme button
lightsBtn.addEventListener('click', () => {
  // Add 'light-mode' class to the container
  container.classList.add('light-mode');
  // Remove 'dark-mode' class from the container
  container.classList.remove('dark-mode');
});

// Event listener for dark theme button
darksBtn.addEventListener('click', () => {
  // Add 'dark-mode' class to the container
  container.classList.add('dark-mode');
  // Remove 'light-mode' class from the container
  container.classList.remove('light-mode');
});



const keys = ['w7pOdpcYi2pueQHxyVgtXqAQrYKKuMzX',
'o2tSPnmbN7Dr5vzpuG0S5ASlcvYTxAvy',
'1kRVhnEkw3rZUzJzB5ZwayEkq0DSfPcc',
'4G8awGzOj67c94zyS5ZPr0VD6shiJdpL',
'r4eYXSYDEV0lC5giWdHYrhM9IoMQLfb2']

// Update weather information
const positionEl =   document.getElementById('location')
let temperatureEl = document.getElementById('temperature')
let humidityEl = document.getElementById('humidity')
let windSpeedEl = document.getElementById('wind-speed')
let cloudCoverEl = document.getElementById('cloud-cover')
let visibilityEl = document.getElementById('visibility')
    



// Get references to the input and button elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Event listener for the search button click
searchButton.addEventListener('click', function() {
  // Get the value of the input field
  const loc = searchInput.value;
  
  /*   // Do something with the value (for example, log it to the console)
    console.log('Search value:', loc);
    console.log('Search value:', typeof loc); */

   // Clear the input field
   searchInput.value = "";

   const options = {method: 'GET', headers: {accept: 'application/json'}};
   fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${loc}&apikey=${keys[0]}`, options)
         .then(response => response.json())
         .then(response => {
           console.log(response)
              positionEl.innerText = response.location.name;
           temperatureEl.innerText = response.data.values.temperature + '°C';
              humidityEl.innerText = response.data.values.humidity + '%';
              windSpeedEl.innerText = response.data.values.windSpeed + ' m/s';
              cloudCoverEl.innerText = response.data.values.cloudCover + '%';
              visibilityEl.innerText = response.data.values.visibility + ' km';
           
         })
       .catch(err => console.error(err));
  });
  
    
    

    
    









  /*     
    cloudBaseEl = response.data.values.cloudBase
    cloudCeilingEl  = response.data.values.cloudCeiling 
    dewPointEl = response.data.values.dewPoint
    freezingRainIntensityEl = response.data.values.freezingRainIntensity
    precipitationProbabilityEl = response.data.values.precipitationProbability
    pressureSurfaceLevelEl = response.data.values. pressureSurfaceLevel
    rainIntensityEl = response.data.values. rainIntensity
    sleetIntensityEl = response.data.values. sleetIntensity
    snowIntensityEl = response.data.values. snowIntensity
    temperatureApparentEl = response.data.values. temperatureApparent
    uvHealthConcernEl = response.data.values.uvHealthConcern
    uvIndexEl = response.data.values. uvIndex
    weatherCodeEl = response.data.values.weatherCode
    windDirectionEl = response.data.values.windDirection
    windGustEl = response.data.values. windGust
    
    
    
    latEl = response.data.location.lat
    lonEl = response.data.location.lon
    typedEl = response.data.location.postcode */

