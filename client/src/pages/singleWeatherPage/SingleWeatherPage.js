import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useWeatherService from '../../services/WeatherService';
import setContent from '../../utils/setContent';


import ButtonBack from '../../shared/buttonBack/ButtonBack';
import HeaderWeatherInfo from './components/headerWeatherInfo/HeaderWeatherInfo';
import TwitterFeed from './components/twitterFeed/TwitterFeed';
import WeatherDayList from './components/weatherDayList/WeatherDayList';

import './singleWeatherPage.scss';

const SingleWeatherPage = () => {
    const { nameCity } = useParams();
    const [weather, setWeather] = useState([]);
    const { getFiveDaysWeather, process, setProcess } = useWeatherService();

    useEffect(() => {
        getFiveDaysWeather(nameCity)
            .then(data => { 
                setWeather(data);
                setProcess('confirmed');
            })
            .catch((err) => {
                console.log(err);
            });
            // eslint-disable-next-line
    }, []);
    
    return (
        <section className="weather-info">
            <div className="container">
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <div className="weather-info__background-circle"></div>
                <ButtonBack />
                <div className="weather-info__wrapper">
                    {setContent(process, View, { weather, nameCity })}
                </div>
            </div>
        </section>
    )
}

const View = ({ weather, nameCity  }) => {
    return (
        <>
            <HeaderWeatherInfo nameCity={nameCity} dataWeather={weather[0]} />
            <div className="weather-info__body">
                {/* <TwitterFeed /> */}
                <div className="days">
                    <WeatherDayList dataWeather={weather} />
                </div>
            </div>
        </>
    )
}

export default SingleWeatherPage;