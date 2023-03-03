import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useWeatherService from '../../../../services/WeatherService';
import useCitiesService from '../../../../services/CitiesService';

import setContent from '../../../../utils/setContent';

import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';
import { deleteCityWeatherList } from '../../../../actions';


const WeatherListItem = ({ name, id }) => {
    const dispatch = useDispatch();
    const [currentWeather, setCurrentWeather] = useState({});
    const { getCurrentWeather, process, setProcess } = useWeatherService();
    const { deleteCity } = useCitiesService();

    useEffect(() => {
        getCurrentWeather(name)
            .then(data => {
                setCurrentWeather(data);
                setProcess('confirmed');
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line
    }, []);

    const onDeleteCity = (event, id) => {
        event.preventDefault();
        event.stopPropagation();
        deleteCity(id)
            .then(data => {
                dispatch(deleteCityWeatherList(data));
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Link to={`/weather-info/${name}`}>
            <div className="weather__list-item">
                <div
                    className="weather__delete-item"
                    onClick={(event) => onDeleteCity(event, id)}
                ><span>&#215;</span></div>
                {setContent(process, View, { data: currentWeather })}
            </div>
        </Link>
    )
}

const View = ({ data }) => {
    const { nameCity, description, icon, temp, maxTemp, minTemp } = data;

    const alignmentMinus = (temp) => {
        const minus = temp < 0 ? '-' : null;
        return minus;
    }

    return (
        <>
            <h2 className="city-name">{nameCity}</h2>
            <div className="weather-icon">
                <WeatherIconSvgSelector id={icon} />
            </div>
            <h3 className="temperature__text"><span>{alignmentMinus(temp)}</span>{Math.abs(temp)}<span>&deg;</span></h3>
            <div className="temperature__name">{description}</div>
            <div className="temperture__containers">
                <div className="temperture__min"><span>{alignmentMinus(minTemp)}</span>{Math.abs(minTemp)}</div>
                <div className="temperture__max"><span>{alignmentMinus(maxTemp)}</span>{Math.abs(maxTemp)}</div>
            </div>
        </>
    )
}

export default WeatherListItem;