import { useSelector, useDispatch } from 'react-redux';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import WeatherListItem from '../weatherListItem/WeatherListItem';
import WeatherListItemAdd from '../weatherListItemAdd/WeatherListItemAdd';
import useCitiesService from '../../../../services/CitiesService';

import 'swiper/swiper.scss';
import "swiper/modules/navigation/navigation.scss";
import { useEffect } from 'react';
import { addCityWeatherList } from '../../../../actions';

SwiperCore.use([Navigation]);

const WeatherList = () => {
    const dispatch = useDispatch();
    const { cityWeatherList } = useSelector(state => state);
    const { getCities } = useCitiesService();

    useEffect(() => {
        getCities()
            .then(cities => cities && cities.forEach(item => dispatch(addCityWeatherList(item))))
            .catch(error => console.log(error));
        // eslint-disable-next-line
    }, [])

    const renderWeathers = cityWeatherList.map(({ name, _id }) => {
        return (
            <SwiperSlide key={_id}>
                <WeatherListItem key={_id} id={_id} name={name} />
            </SwiperSlide>
        )
    });

    return (
        <section className="weather">
            <div className="container">
                <div className="weather__wrapper">
                    <Swiper
                        breakpoints={{
                            1440: {
                                slidesPerView: 3
                            },
                            960: {
                                slidesPerView: 2
                            }
                        }}
                        navigation
                        className="weather__list">
                        {renderWeathers}
                        <SwiperSlide>
                            <WeatherListItemAdd />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default WeatherList;