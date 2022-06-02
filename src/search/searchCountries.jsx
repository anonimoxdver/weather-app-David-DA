import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./countries.css";
import { getData } from "../api/getData";
import { GetHours } from "../helpers/GetHours";

import {
  CardContainer,
  CardContainerDay2,
  CardContainerday1,
} from "../helpers/CardContainer";
import { NewHour, NewDate } from "../helpers/GetDates";
import { Climate, ImgClimate } from "../cases/Cases";

export const SearchCountries = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

  const [data, setData] = useState({});
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);

  useEffect(() => {
    getData("Mexico").then(setData);

    getData("Buenos aires").then(setData1);

    getData("spain").then(setData2);

    getData("london").then(setData3);
  }, []);

  const { hours = "" } = data;
  const { hours1 = "" } = data;
  const { hours: hours_data_1 = "" } = data1;
  const { hours: hours_data_2 = "" } = data2;
  const { hours: hours_data_3 = "" } = data3;
  console.log(data);

  return (
    <div className="isopen-main">
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        className={isOpen ? "parent-1 parent-main" : "parent-1 parentActive-1"}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="">
          <div className="card-countries">
            <img
              className="card-location-image"
              src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653630822/weatherApp/bx-current-location_k8paz9.svg"
              alt=""
            />
            <div className="card-location">{data.locationName}, </div>
            <div>{data.country} </div>
          </div>

          <div
            className={
              isOpen
                ? `${Climate[data.text0]} card-main-information`
                : `${Climate[data.text0]} card-main-day-1`
            }
          >
            <div>
              <img
                src={`${ImgClimate[data.text0]}`}
                alt=""
                className="card-img-icon"
              />

              <div className="card-temperature">
                <h2 className="card-mintemp">
                  <span className="card-span-min">Min</span>
                  {data.mintemp0}°{" "}
                </h2>
                <h1 className="card-actualTemperature">
                  {data.actualTemperature}°{" "}
                </h1>
                <h2 className="card-maxtemp">
                  <span className="card-span-max">Max</span>
                  {data.maxtemp0}°{" "}
                </h2>
              </div>

              <div className="card-text">{data.text0} </div>

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
                  <div className="card-1-wind">
                    {" "}
                    <span className="card-span-wind">Wind</span>
                    {data.windSpeed}km/h{" "}
                  </div>
                </div>
                <div className="card-clouds">
                  <img
                    className="card-img-clouds"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png"
                    alt=""
                  />
                  <div className="card-2-clouds">
                    <span className="card-span-clouds">clouds</span>
                    {data.percentageOfClouds}%{" "}
                  </div>
                </div>
                <div className="card-humidity">
                  <img
                    className="card-img-humidity"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png"
                    alt=""
                  />
                  <div className="card-3-humidity">
                    <span className="card-span-humdity">Humidity</span>
                    {data.humidity}%{" "}
                  </div>
                </div>{" "}
                <div className="card-hours-main">
                  {Object.values(hours_data_1).map((hours) => (
                    <div key={hours.time_epoch}>
                      <NewHour date={`${hours.time}`} />
                      <GetHours
                        icon={hours.condition.icon}
                        temp_c={hours.temp_c}
                        text={hours.condition.text}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isOpen ? (
            <div></div>
          ) : (
            <>
              <div
                className={`${Climate[data.text1]} card-information-open-1`}
              >
                <CardContainer
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data.text1]}`}
                  {...data}
                />
              </div>
              <div
                className={`${Climate[data.text2]} card-information-open-2`}
              >
                <CardContainerDay2
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data.text2]}`}
                  {...data}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        className={isOpen1 ? "parent-2" : "parent-2 parentActive-2"}
        onClick={() => setIsOpen1(!isOpen1)}
      >
        <div className="">
          <div className="card-countries">
            <img
              className="card-location-image"
              src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653630822/weatherApp/bx-current-location_k8paz9.svg"
              alt=""
            />
            <div className="card-location">{data1.locationName}, </div>
            <div>{data1.country} </div>
          </div>

          <div
            className={
              isOpen1
                ? `${Climate[data1.text0]} card-main-information`
                : `${Climate[data1.text0]} card-main-day-1`
            }
          >
            <div>
              <img
                src={`${ImgClimate[data1.text0]}`}
                alt=""
                className="card-img-icon"
              />

              <div className="card-temperature">
                <h2 className="card-mintemp">
                  <span className="card-span-min">Min</span>
                  {data1.mintemp0}°{" "}
                </h2>
                <h1 className="card-actualTemperature">
                  {data1.actualTemperature}°{" "}
                </h1>
                <h2 className="card-maxtemp">
                  <span className="card-span-max">Max</span>
                  {data1.maxtemp0}°{" "}
                </h2>
              </div>

              <div className="card-text">{data1.text0} </div>

              <div className="card-date">
                <NewDate date={`${data1.localtime}`} />
              </div>

              <div className="card-separator"></div>

              <div className="card-wind-clouds-humidity">
                <div className="card-wind">
                  <img
                    className="card-img-wind"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png"
                    alt=""
                  />
                  <div className="card-1-wind">
                    {" "}
                    <span className="card-span-wind">Wind</span>
                    {data1.windSpeed}km/h{" "}
                  </div>
                </div>
                <div className="card-clouds">
                  <img
                    className="card-img-clouds"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png"
                    alt=""
                  />
                  <div className="card-2-clouds">
                    <span className="card-span-clouds">clouds</span>
                    {data1.percentageOfClouds}%{" "}
                  </div>
                </div>
                <div className="card-humidity">
                  <img
                    className="card-img-humidity"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png"
                    alt=""
                  />
                  <div className="card-3-humidity">
                    <span className="card-span-humdity">Humidity</span>
                    {data1.humidity}%{" "}
                  </div>
                </div>{" "}
                <div className="card-hours-main">
                  {Object.values(hours_data_1).map((hours) => (
                    <div key={hours.time_epoch}>
                      <NewHour date={`${hours.time}`} />
                      <GetHours
                        icon={hours.condition.icon}
                        temp_c={hours.temp_c}
                        text={hours.condition.text}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isOpen1 ? (
            <div></div>
          ) : (
            <>
              <div
                className={`${Climate[data1.text1]} card-information-open-1`}
              >
                <CardContainer
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data1.text1]}`}
                  {...data1}
                />
              </div>
              <div
                className={`${Climate[data1.text2]} card-information-open-2`}
              >
                <CardContainerDay2
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data1.text2]}`}
                  {...data1}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        className={isOpen2 ? "parent-3" : "parent-3 parentActive-3"}
        onClick={() => setIsOpen2(!isOpen2)}
      >
        <div className="">
          <div className="card-countries">
            <img
              className="card-location-image"
              src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653630822/weatherApp/bx-current-location_k8paz9.svg"
              alt=""
            />
            <div className="card-location">{data2.locationName}, </div>
            <div>{data2.country} </div>
          </div>

          <div
            className={
              isOpen2
                ? `${Climate[data2.text0]} card-main-information`
                : `${Climate[data2.text0]} card-main-day-1`
            }
          >
            <div>
              <img
                src={`${ImgClimate[data2.text0]}`}
                alt=""
                className="card-img-icon"
              />

              <div className="card-temperature">
                <h2 className="card-mintemp">
                  <span className="card-span-min">Min</span>
                  {data2.mintemp0}°{" "}
                </h2>
                <h1 className="card-actualTemperature">
                  {data2.actualTemperature}°{" "}
                </h1>
                <h2 className="card-maxtemp">
                  <span className="card-span-max">Max</span>
                  {data2.maxtemp0}°{" "}
                </h2>
              </div>

              <div className="card-text">{data2.text0} </div>

              <div className="card-date">
                <NewDate date={`${data2.localtime}`} />
              </div>

              <div className="card-separator"></div>

              <div className="card-wind-clouds-humidity">
                <div className="card-wind">
                  <img
                    className="card-img-wind"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png"
                    alt=""
                  />
                  <div className="card-1-wind">
                    {" "}
                    <span className="card-span-wind">Wind</span>
                    {data2.windSpeed}km/h{" "}
                  </div>
                </div>
                <div className="card-clouds">
                  <img
                    className="card-img-clouds"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png"
                    alt=""
                  />
                  <div className="card-2-clouds">
                    <span className="card-span-clouds">clouds</span>
                    {data2.percentageOfClouds}%{" "}
                  </div>
                </div>
                <div className="card-humidity">
                  <img
                    className="card-img-humidity"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png"
                    alt=""
                  />
                  <div className="card-3-humidity">
                    <span className="card-span-humdity">Humidity</span>
                    {data2.humidity}%{" "}
                  </div>
                </div>{" "}
                <div className="card-hours-main">
                  {Object.values(hours_data_1).map((hours) => (
                    <div key={hours.time_epoch}>
                      <NewHour date={`${hours.time}`} />
                      <GetHours
                        icon={hours.condition.icon}
                        temp_c={hours.temp_c}
                        text={hours.condition.text}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isOpen2 ? (
            <div></div>
          ) : (
            <>
              <div
                className={`${Climate[data2.text1]} card-information-open-1`}
              >
                <CardContainer
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data2.text1]}`}
                  {...data2}
                />
              </div>
              <div
                className={`${Climate[data2.text2]} card-information-open-2`}
              >
                <CardContainerDay2
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data2.text2]}`}
                  {...data2}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
      <motion.div
        layout
        initial={{ borderRadius: 50 }}
        className={isOpen3 ? "parent-4" : "parent-4 parentActive-4"}
        onClick={() => setIsOpen3(!isOpen3)}
      >
        <div className="">
          <div className="card-countries">
            <img
              className="card-location-image"
              src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653630822/weatherApp/bx-current-location_k8paz9.svg"
              alt=""
            />
            <div className="card-location">{data3.locationName}, </div>
            <div>{data3.country} </div>
          </div>

          <div
            className={
              isOpen3
                ? `${Climate[data3.text0]} card-main-information`
                : `${Climate[data3.text0]} card-main-day-1`
            }
          >
            <div>
              <img
                src={`${ImgClimate[data3.text0]}`}
                alt=""
                className="card-img-icon"
              />

              <div className="card-temperature">
                <h2 className="card-mintemp">
                  <span className="card-span-min">Min</span>
                  {data3.mintemp0}°{" "}
                </h2>
                <h1 className="card-actualTemperature">
                  {data3.actualTemperature}°{" "}
                </h1>
                <h2 className="card-maxtemp">
                  <span className="card-span-max">Max</span>
                  {data3.maxtemp0}°{" "}
                </h2>
              </div>

              <div className="card-text">{data3.text0} </div>

              <div className="card-date">
                <NewDate date={`${data3.localtime}`} />
              </div>

              <div className="card-separator"></div>

              <div className="card-wind-clouds-humidity">
                <div className="card-wind">
                  <img
                    className="card-img-wind"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632948/weatherApp/viento_tqocu1.png"
                    alt=""
                  />
                  <div className="card-1-wind">
                    {" "}
                    <span className="card-span-wind">Wind</span>
                    {data3.windSpeed}km/h{" "}
                  </div>
                </div>
                <div className="card-clouds">
                  <img
                    className="card-img-clouds"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653633125/weatherApp/cloud_tld3he.png"
                    alt=""
                  />
                  <div className="card-2-clouds">
                    <span className="card-span-clouds">clouds</span>
                    {data3.percentageOfClouds}%{" "}
                  </div>
                </div>
                <div className="card-humidity">
                  <img
                    className="card-img-humidity"
                    src="https://res.cloudinary.com/dsii7wbi4/image/upload/v1653632957/weatherApp/drop_ktnqtj.png"
                    alt=""
                  />
                  <div className="card-3-humidity">
                    <span className="card-span-humdity">Humidity</span>
                    {data3.humidity}%{" "}
                  </div>
                </div>{" "}
                <div className="card-hours-main">
                  {Object.values(hours_data_1).map((hours) => (
                    <div key={hours.time_epoch}>
                      <NewHour date={`${hours.time}`} />
                      <GetHours
                        icon={hours.condition.icon}
                        temp_c={hours.temp_c}
                        text={hours.condition.text}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {isOpen3 ? (
            <div></div>
          ) : (
            <>
              <div
                className={`${Climate[data3.text1]} card-information-open-1`}
              >
                <CardContainer
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data3.text1]}`}
                  {...data3}
                />
              </div>
              <div
                className={`${Climate[data3.text2]} card-information-open-2`}
              >
                <CardContainerDay2
                  classname="card-main-information-open-search-2"
                  icon={`${ImgClimate[data3.text2]}`}
                  {...data3}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};
