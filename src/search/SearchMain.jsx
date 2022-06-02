import { useEffect, useState, useLayoutEffect, useRef } from 'react';
import { getData } from '../api/getData';
import { AddClimate } from '../components/addClimate';
import { CardContainer, CardContainerDay2 , CardContainerday1} from '../helpers/CardContainer';
import { Climate, ImgClimate} from '../cases/Cases'
import './search.css'
import './countries.css'
import { SearchCountries } from './searchCountries';
import { useScreenSize } from '../helpers/GetWidth'
import { SampleNextArrow, SamplePrevArrow} from '../helpers/GetCustomArrows'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './background.css'
export const SearchMain = () => {


const [data, setData] = useState([])
 const [inputApi, setInputValue] = useState('')


 const [buttonOpen3, setButtonOpen3] = useState(true)
useEffect(() => {

getData(inputApi)
  .then(setData)

}, [inputApi])
console.log(data)


console.log(useScreenSize())
const { width }   = useScreenSize()
const settings = {
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};
console.log(ImgClimate)

  return (
    <div className='search-main'>
      <div className=''>
         <AddClimate setClimate={setInputValue}/>
      </div>
    {
      inputApi == '' ? <SearchCountries/>
       :   
        
        <div className='parent-search-1  '>
         <div className="card-countries">
           <img
             className="card-location-image"
            src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653630822/weatherApp/bx-current-location_k8paz9.svg"
            alt=""
           />
           <div className="card-location">{data.locationName}, </div>
           <div>{data.country} </div>
         </div>
 

        <div className='search-resultss' >
        
          {
            width > 696 ?
          
                              data == null || data == 'undefined' || data == '' ? '': 

                <>
                <div className={ `${Climate[data.text0]}  card-information-day-1`}>
                  <CardContainerday1  classname='card-information-day-1' classname4='card-img-icon-2' icon={`${ImgClimate[data.text0]}`} {...data} />
                </div>
                <div className={ `${Climate[data.text1]}  card-information-day-2`}>
                   <CardContainer icon={`${ImgClimate[data.text1]}`} classname2='card-mintemp-3' classname3='card-maxtemp-3' className1='card-main-information-day-2' classname='card-main-information-day-2-search'{...data}/>
                </div>
                <div className={ buttonOpen3 ? `${Climate[data.text2]}  card-information-day-2`: ' card-main-information-day-1open' }>
                    <CardContainerDay2  icon={`${ImgClimate[data.text2]}`} classname2='card-mintemp-3' classname3='card-maxtemp-3' className1='card-main-information-day-3' classname='card-main-information-day-3-search'{...data} />
                </div>
           </>
                    : 
                    data == null || data == 'undefined' || data == '' ? '': 

                    <Slider {...settings}>
                    <div className={ `${Climate[data.text0]}  card-information-day-1`}>
                      <CardContainerday1 classname='card-information-day-1' classname4='card-img-icon-2' icon={`${ImgClimate[data.text0]}`} {...data} />
                    </div>
                    <div className={ `${Climate[data.text1]}  card-information-day-2`}>
                       <CardContainer icon={`${ImgClimate[data.text1]}`} classname2='card-mintemp-3' classname3='card-maxtemp-3' className1='card-main-information-day-2' classname='card-main-information-day-2-search'{...data}/>
                    </div>
                    <div className={ buttonOpen3 ?  `${Climate[data.text2]}  card-information-day-2` : ' card-main-information-day-1open' }>
                        <CardContainerDay2 icon={`${ImgClimate[data.text2]}`} classname2='card-mintemp-3' classname3='card-maxtemp-3' className1='card-main-information-day-3' classname='card-main-information-day-3-search'{...data} />
                    </div>
               </Slider >

          }
          
       </div>

       

        </div>
 



 
      
     
    }

    


    </div>
   
  )
}

