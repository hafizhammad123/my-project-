import React, { useState } from 'react';

function App() {
  const apiKey = '8a13df165f9099bdd3008e66764b2a56';
  const [userSearch, setUserSearch] = useState('');
  const [result, setResult] = useState(null);

  const getApiData = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userSearch},pakistan&units=metric&appid=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setResult(data.main); // Assuming main object contains weather information
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        // Handle errors here
      });
  };

  const userInput = (e) => {
    setUserSearch(e.target.value);
  };

  return (
    <>
    <center>
      <div className="search-sec">
        <input onChange={userInput} type="text" placeholder='Search here' />
        <button onClick={getApiData}>Search</button>
      </div>
      </center>
      <div className='userProfile-sec'>
        {result && (
          <div className='userProfile'>
           

            <section class="vh-100">
  <div class="container py-5">

    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-7 col-xl-5">

        <div id="wrapper-bg" class="card text-white bg-image shadow-4-strong"
          style={{backgroundColor: "#000000"}}>
        
          <div class="card-header p-4 border-0">
            <div class="text-center mb-3">
              <p class="h2 mb-1" id="wrapper-name"></p>
              <p class="mb-1" id="wrapper-description"></p>
              <p class="display-1 mb-1" id="wrapper-temp"></p>
              <span class="">Pressure: {result.pressure} <span id="wrapper-pressure"></span></span>
              <span class="mx-2">|</span>
              <span class="">Humidity: {result.humidity} <span id="wrapper-humidity"></span></span>
            </div>
          </div>

         
          <div class="card-body p-4 border-top border-bottom mb-2">
            <div class="row text-center">
              <div class="col-2">
                <strong class="d-block mb-2">Now {result.temp}</strong>
                <img id="wrapper-icon-hour-now" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour-now"></strong>
              </div>

              <div class="col-2">
                <strong class="d-block mb-2" id="wrapper-time1"></strong>
                <img id="wrapper-icon-hour1" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour1"></strong>
              </div>

              <div class="col-2">
                <strong class="d-block mb-2" id="wrapper-time2"></strong>
                <img id="wrapper-icon-hour2" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour2"></strong>
              </div>

              <div class="col-2">
                <strong class="d-block mb-2" id="wrapper-time3"></strong>
                <img id="wrapper-icon-hour3" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour3"></strong>
              </div>

              <div class="col-2">
                <strong class="d-block mb-2" id="wrapper-time4"></strong>
                <img id="wrapper-icon-hour4" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour4"></strong>
              </div>

              <div class="col-2">
                <strong class="d-block mb-2" id="wrapper-time5"></strong>
                <img id="wrapper-icon-hour5" src="" class="" alt="" />
                <strong class="d-block" id="wrapper-hour5"></strong>
              </div>
            </div>
          </div>

         
          <div class="card-body px-5">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <strong>Today Temperature Minimum: {result.temp_min}</strong>
              </div>

              <div class="col-lg-2 text-center">
                <img id="wrapper-icon-today" src="" class="w-100" alt="" />
              </div>

              <div class="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-today"></span>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-6">
                <strong> Temperature Maximum: {result.temp_max}</strong>
              </div>

              <div class="col-lg-2 text-center">
                <img id="wrapper-icon-tomorrow" src="" class="w-100" alt="" />
              </div>

              <div class="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-tomorrow"></span>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-lg-6">
                <strong></strong>
              </div>

              <div class="col-lg-2 text-center">
                <img id="wrapper-icon-dAT" src="" class="w-100" alt="" />
              </div>

              <div class="col-lg-4 text-end">
                <span id="wrapper-forecast-temp-dAT"></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
            

            
          </div>
        )}
      </div>
    </>
  );
}
export default App;
