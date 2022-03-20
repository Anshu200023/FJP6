r=[ { name: "Roorkee", rainfall: [5, 6, 5, 5, 4, 7, 8] }, { name: "Pauri", rainfall: [3, 3, 3, 1, 2, 2, 2] }, ];



function rainDance(rainfall) {
  let reqAns = [];
  for (x in rainfall) {
    let cityObj = { name: rainfall[x].name };
    let currCityRainfall = rainfall[x].rainfall;
    let rainfallSum = 0;
    for(x in currCityRainfall) rainfallSum+= currCityRainfall[x]
    let avgRainfall =
      rainfallSum / currCityRainfall.length;
    cityObj.avgRainfall = avgRainfall;
    reqAns.push(cityObj);
  }
  return reqAns;
}


console.log(rainDance(r))