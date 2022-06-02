import './styles.css'
import {useRef} from 'react'


const DEFAULT_ICON ='//cdn.weatherapi.com/weather/64x64/night/116.png'
const DEFAULT_TEXT = 'Partly cloudy'
const DEFAULT_TEMP = '26.9'

export const GetHours = ({
  temp_c =DEFAULT_TEMP,
  icon = DEFAULT_ICON,
  text = DEFAULT_TEXT
}) => {


     return (
         <div className="hour-main">

           <div className='hour-temp'>
              {temp_c}
           </div>
           
           <img src={icon} alt=""  className='hour-img'/>

           <div className='hour-text' >
            {text}
           </div>

         </div>
     )
}
