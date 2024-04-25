function displayData(allCities) {
  displayCurrent(allCities);
  displayNext(allCities.forecast.forecastday[1].day.maxtemp_c);
  displayThird(allCities.forecast);
}

async function wheather() {
  try {
    var response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=01eaafec66924a35938211026240204&q=07112&days=7`,
      {
        cache: "default",
      }
    );
    var allCities = await response.json();
    displayData(allCities);
    console.log(allCities);
  } catch (error) {
    console.log("dd");
  }
}

async function searchApi() {
  var searchInput = document.getElementById("search");
  var city = searchInput.value; // cairo
  try {
    var response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=01eaafec66924a35938211026240204&q=${city}&days=3`
    );
    var finaldata = await response.json();
    displayData(finaldata);
  } catch (error) {
    console.log("kkkk");
  }
}

function displayCurrent(allCities) {
  var cartona = ``;

  cartona += `
        <div class="wheather-divs ">
        <div class="d-flex justify-content-between day rounded-start-4">
            <div>tuesday</div>
            <div>2april</div>
        </div>
        <div  class="day-temp">
            <div>
                <div>${allCities.location.name}</div>
                <div class="d-flex align-items-center">
                <div class="py-4 num me-5">${allCities.current.temp_c}<sub>°</sub>c</div>
                <div><img src="https:${allCities.current.condition.icon}"/></div>

                </div>
            </div>
            <div class="my-4 text-info">${allCities.current.condition.text}</div>
            <div>
                <span class="me-4"><i class="fa-solid fa-umbrella"></i> 20%</span>
                <span class="me-4"><i class="fa-solid fa-wind"></i> wind</span>
                <span class="me-4"><i class="fa-solid fa-compass"></i> east</span>
            </div>

        </div>
    </div>

    `;

  document.querySelector(".current-wheather").innerHTML = cartona;
}

function displayNext(next) {
  var cartona = ``;

  cartona += `
        
        <div class="wheather-divs ">
                            <div class="day">
                                <div>wendsday</div>
                            </div>
                            <div class="px-3 py-3 text-center">
                                
                                    <div><img class="" src="images/113 (1).webp"/></div>
                                    <div class="fa-2x text-white fw-bold my-3">${next}<sub>°</sub>c</div>
                                    <div>17.8</div>
                                    <div class="my-4 text-info">Partly cloudy</div>
            
                            </div>
                        </div>

    `;

  document.querySelector(".next-wheather").innerHTML = cartona;
}

function displayThird(prev) {
  var cartona = ``;

  cartona += `
        <div class="wheather-divs ">
                            <div class="day">
                                <div>wendsday</div>
                            </div>
                            <div class="px-3 py-3 text-center">
                                
                                    <div><img class="" src="https:${prev.forecastday[2].day.condition.icon}"/></div>
                                    <div class="fa-2x text-white fw-bold my-3">${prev.forecastday[2].day.maxtemp_c}<sub>°</sub>c</div>
                                    <div>17.8</div>
                                    <div class="my-4 text-info">${prev.forecastday[2].day.condition.text}</div>
            
                            </div>
                        </div>

    `;

  document.querySelector(".third-day").innerHTML = cartona;
}

wheather();

// function search(index){

//     var index=searchInput.value;
//     var cartona= ``;
//     for (var i = 0;i<allCities.length;i++){
//         if(allCities[i].searchInput.toLocaleLowerCase().includes(index.toLocaleLowerCase())==true){
//             cartona+= `

//                     <div class="col-md-4 today p-0 rounded-start-4">
//                         <div class="wheather-divs ">
//                             <div class="d-flex justify-content-between day rounded-start-4">
//                                 <div>tuesday</div>
//                                 <div>2april</div>
//                             </div>
//                             <div  class="day-temp">
//                                 <div>
//                                     <div>${allCities[i].name}</div>
//                                     <div class="d-flex align-items-center">
//                                     <div class="py-4 num me-5">${allCities[i].lat}<sub>°</sub>c</div>
//                                     <div><img src="images/116.webp"/></div>
//                                     </div>
//                                 </div>
//                                 <div class="my-4 text-info">Partly cloudy</div>
//                                 <div>
//                                     <span class="me-4"><i class="fa-solid fa-umbrella"></i> 20%</span>
//                                     <span class="me-4"><i class="fa-solid fa-wind"></i> wind</span>
//                                     <span class="me-4"><i class="fa-solid fa-compass"></i> east</span>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                     <div class="col-md-4 next-day p-0">
//                         <div class="wheather-divs ">
//                             <div class="day">
//                                 <div>wendsday</div>
//                             </div>
//                             <div class="px-3 py-3 text-center">

//                                     <div><img class="" src="images/113 (1).webp"/></div>
//                                     <div class="fa-2x text-white fw-bold my-3">33.1<sub>°</sub>c</div>
//                                     <div>17.8</div>
//                                     <div class="my-4 text-info">Partly cloudy</div>

//                             </div>
//                         </div>

//                     </div>
//                     <div class="col-md-4 third-day p-0 rounded-end-4">
//                         <div class="wheather-divs ">
//                             <div class="day">
//                                 <div>wendsday</div>
//                             </div>
//                             <div class="px-3 py-3 text-center">

//                                     <div><img class="" src="images/113 (1).webp"/></div>
//                                     <div class="fa-2x text-white fw-bold my-3">33.1<sub>°</sub>c</div>
//                                     <div>17.8</div>
//                                     <div class="my-4 text-info">Partly cloudy</div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>

//             `
//         }
//         document.querySelector('.wheather').innerHTML = cartona;
//     }
// }

// function search(a) {
//   a = searchInput.value;

//   for (let i = 0; i < searchContry; i++) {
//     if (
//       searchContry[i].searchInput
//         .toLocaleLowerCase()
//         .includes(a.toLocaleLowerCase()) == true
//     ) {
//       displayCurrent(allCities);
//       displayNext(allCities.forecast.forecastday[i].day.maxtemp_c);
//       displayThird(allCities.forecast);
//     }
//   }
// }
// // search("lond");
