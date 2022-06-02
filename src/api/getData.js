

export const getData = async(inputApi = '') => {

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${ encodeURI (inputApi)}&days=3`;
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'a8460436afmshf488f24dd2d259fp182196jsn0c50446e189b'
    }
  };
  
  const res = await window.fetch(url, options)
  const resp = await res.json()
  console.log(resp)
 
  
  const { location, current, forecast } = resp;
  const { country, localtime, name, region} = location;
  const {  humidity,  temp_c, cloud, wind_kph} = current;
  const { forecastday} = forecast;
  const { 0:position0, 1:position1, 2:position2 } = forecastday;

  const { day:day0, date:date0, hour:hours } = position0
  const { condition:condition0, mintemp_c:mintemp0, maxtemp_c:maxtemp0 ,avghumidity:humidity0 ,maxwind_kph:windSpeed0, daily_chance_of_rain:ChanceToRain0} = day0; 
  const {icon:icon0, text:text0} = condition0;

  const { day:day1, date:date1, hour:hours1 } = position1
  const { condition:condition1, mintemp_c:mintemp1,  maxtemp_c:maxtemp1,avghumidity:humidity1 ,maxwind_kph:windSpeed1, daily_chance_of_rain:ChanceToRain1} = day1; 
  const {icon:icon1, text:text1} = condition1;

  const { day:day2, date:date2, hour:hours2 } = position2
  const { condition:condition2 , mintemp_c:mintemp2,  maxtemp_c:maxtemp2, avghumidity:humidity2 ,maxwind_kph:windSpeed2, daily_chance_of_rain:ChanceToRain2} = day2; 
  const {icon:icon2, text:text2} = condition2;

  



  const body = {
    country,
    localtime,
    locationName: name,
    humidity,
    region,
    actualTemperature: temp_c,
    percentageOfClouds: cloud,
    windSpeed: wind_kph,
    
    
    date0,
    icon0,
    text0,
    mintemp0,
    maxtemp0,
    humidity0,
    windSpeed0,
    ChanceToRain0,
    hours,

    date1,
    icon1,
    text1,
    mintemp1,
    maxtemp1,
    humidity1,
    windSpeed1,
    ChanceToRain1,
    hours1,

    date2,
    icon2,
    text2,
    mintemp2,
    maxtemp2,
    humidity2,
    windSpeed2,
    ChanceToRain2,
    hours2,
 
  };
  
    return body

}
  
  
  