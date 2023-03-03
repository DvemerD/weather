import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import useCitiesService from '../../../../services/CitiesService';
import setContent from '../../../../utils/setContent';

import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

import { currentWeatherClear, addCityWeatherList } from '../../../../actions';


const SearchCityContent = () => {
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();
    const { currentWeather,
        currentWeatherLoadingStatus } = useSelector(state => state);
    const { addCities, process } = useCitiesService();

    useEffect(() => {
        return () => {
            dispatch(currentWeatherClear());
        }
        // eslint-disable-next-line 
    }, []);
    
    const onFollowedWeather = (name) => {
        addCities(name)
            .then(({ city }) => {
                dispatch(addCityWeatherList(city));
                setRedirect(true);
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="search__content">
            <div className="search__content-inner">
                {setContent(currentWeatherLoadingStatus, View, { data: currentWeather, onFollowedWeather, redirect, process })}
            </div>
        </div>
    )
}

const View = ({ data, onFollowedWeather, redirect, process }) => {
    const { nameCity, description, icon, temp } = data;
  
    return (
        <>
            <h2 className="search__name">{nameCity}</h2>
            <div className="search__icon">
                <WeatherIconSvgSelector id={icon} />
            </div>
            <h3 className="search__text">{temp}</h3>
            <div className="search__weather-name">{description}</div>
            <button
                disabled={process === 'loading'}
                className="search__btn"
                onClick={() => { onFollowedWeather(nameCity) }}>
                    {process === 'loading' ? 'LOADING...' : 'FOLLOWED'}
                </button>
            {redirect ? <Redirect to="/"/> : null}
        </>
    )
}

export default SearchCityContent;