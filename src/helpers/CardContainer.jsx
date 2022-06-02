import React from 'react'
import { GetHours } from './GetHours'
import { NewDate, NewHour} from '../helpers/GetDates'
const data1 = {
 
  mintemp1: 1,
  maxtemp1: 28.6,
  text1: "Sunny",
  date1: "",
  windSpeed1: 21.6,
  ChanceToRain1: 80,
  humidity1: 2,
  hours1: 123,
  hours: 123,
  hours2: 123,
  classname: '',
  className1: '',
  icon: '',
  localtime: ''
}




export const CardContainerday1 = (data = data1) => {


 
  return (
    <div className={`${data.className}`}>
    <div className= "card-main-information-open-search">
   <img src={data.icon} alt="" className="card-img-icon"/>

   <div className="card-temperature">
     <h2 className="card-mintemp"><span className="card-span-min">Min</span>{data.mintemp0}° </h2>
     <h1 className="card-actualTemperature">{data.actualTemperature}° </h1>
     <h2 className="card-maxtemp"><span className="card-span-max">Max</span>{data.maxtemp0}° </h2>
   </div>

   <div className="card-text">{data.text0} </div>
 <div className="card-date">
 <NewDate date={`${"2022-06-02"}`} />
 </div>

 <div className="card-separator"></div>
 

 <div className="card-wind-clouds-humidity">
   <div className="card-wind">
       <img 
         className="card-img-wind"
         src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png" 
         alt="" 
       />
       <div className="card-1-wind"> <span className="card-span-wind">Wind</span>{data.windSpeed}km/h </div>
   </div>

   <div className="card-clouds">
       <img 
         className="card-img-clouds"
         src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png" 
         alt="" 
       />
       <div className="card-2-clouds"><span className="card-span-clouds">clouds</span>{data.percentageOfClouds}% </div>
   </div>

   <div className="card-humidity">
       <img 
         className="card-img-humidity"
         src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png" 
         alt="" 
       />
       <div className="card-3-humidity"><span className="card-span-humdity">Humidity</span>{data.humidity}% </div>
   </div>
         <div className="card-hours-main"  >
 
      {data == null || data == 'undefined' || data == '' ? '':
        Object.values(data.hours).map(( hours) => (
          <div key={hours.time_epoch}>
            <NewHour date={`${hours.time}`} />
             <GetHours icon={hours.condition.icon} temp_c={hours.temp_c} text={hours.condition.text} />
             
          </div>
        )) 
      }

        
   </div> 
  </div>


 </div>





 </div>
  )
}


export const CardContainer = (data = data1) => {

    
  return (
    <div className={`${data.className1} ${data.classname}`}>
    <img src={data.icon} alt="" className="card-img-icon"/>

    <div className="card-temperature">
      <h2 className="card-mintemp-2"><span className="card-span-min">Min</span>{data.mintemp1}° </h2>
      
      <h2 className="card-maxtemp-2"><span className="card-span-max">Max</span>{data.maxtemp1}° </h2>
    </div>

    <div className="card-text">{data.text1} </div>
  <div className="card-date">
        <NewDate date={`${data.localtime}`} />
  </div>

  <div className="card-separator"></div>
  

  <div className="card-wind-clouds-humidity">
    <div className="card-wind">
        <img 
          className="card-img-wind"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png" 
          alt="" 
        />
        <div className="card-1-wind"> <span className="card-span-wind">Wind</span>{data.windSpeed1}km/h </div>
    </div>

    <div className="card-clouds">
        <img 
          className="card-img-clouds"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png" 
          alt="" 
        />
        <div className="card-2-clouds"><span className="card-span-clouds">Chance to rain</span>{data.ChanceToRain1}% </div>
    </div>

    <div className="card-humidity">
        <img 
          className="card-img-humidity"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png" 
          alt="" 
        />
        <div className="card-3-humidity"><span className="card-span-humdity">Humidity</span>{data.humidity1}% </div>
    </div>


      <div className="card-hours-main-2">
          
          {data == null || data == 'undefined' || data == '' ? '':
            Object.values(data.hours1).map(( hours) => (
              <div key={hours.time_epoch}>
                <NewHour date={`${hours.time}`} />
                 <GetHours icon={hours.condition.icon} temp_c={hours.temp_c} text={hours.condition.text} />
                 
              </div>
            ))
          }
 
            
       </div>   
  </div>

       


 


  </div>

  )
}







export const CardContainerDay2 = (data = data1) => {

     

  return (
    <div className={`${data.className1} ${data.classname}`}>
    <img src={data.icon} alt="" className="card-img-icon"/>

    <div className="card-temperature">
      <h2 className="card-mintemp-2"><span className="card-span-min">Min</span>{data.mintemp2}° </h2>
      
      <h2 className="card-maxtemp-2"><span className="card-span-max">Max</span>{data.maxtemp2}° </h2>
    </div>

    <div className="card-text">{data.text2} </div>
  <div className="card-date">
        <NewDate date={`${data.date2}`} />
  </div>

  <div className="card-separator"></div>
  

  <div className="card-wind-clouds-humidity">
    <div className="card-wind">
        <img 
          className="card-img-wind"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png" 
          alt="" 
        />
        <div className="card-1-wind"> <span className="card-span-wind">Wind</span>{data.windSpeed2}km/h </div>
    </div>

    <div className="card-clouds">
        <img 
          className="card-img-clouds"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png" 
          alt="" 
        />
        <div className="card-2-clouds"><span className="card-span-clouds">Chance to rain</span>{data.ChanceToRain2}% </div>
    </div>

    <div className="card-humidity">
        <img 
          className="card-img-humidity"
          src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png" 
          alt="" 
        />
        <div className="card-3-humidity"><span className="card-span-humdity">Humidity</span>{data.humidity2}% </div>
    </div>
      <div className="card-hours-main">
          
          {data == null || data == 'undefined' || data == '' ? '':
            Object.values(data.hours2).map(( hours) => (
              <div key={hours.time_epoch}>
                <NewHour date={`${hours.time}`} />
                 <GetHours icon={hours.condition.icon} temp_c={hours.temp_c} text={hours.condition.text} />
                 
              </div>
            ))
          }
 
            
       </div>   
  </div>

       


 


  </div>

  )
}