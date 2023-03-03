import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ComplexSvgSelector from '../../../../assets/icons/ComplexSvgSelector';

const WeatherListItemAdd = () => {
    const { themeMode } = useSelector(state => state);

    return (
        <div className="weather__list-item weather__list-item_add">
            <h2 className="city-name">ADD CITY</h2>
            <Link to="/search-city">
                <div className="city-plus"></div>
            </Link>
            <div className="city-img">
                <ComplexSvgSelector id={`city-${themeMode}`}/>
            </div>
        </div>
    )
}

export default WeatherListItemAdd;