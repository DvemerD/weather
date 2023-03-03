import WeatherIconSvgSelector from '../../../../assets/icons/WeatherIconSvgSelector';

const WeatherDayItem = ({ data }) => {
    
    const { main: { temp }, weather: [{ main, icon }], dt_txt } = data;
    const date = new Date(dt_txt).toString();
    
    const alignmentMinus = (temp) => {
        const minus = temp < 0 ? '-' : null;
        return minus;
    }

    return (
        <div className="day-item">
            <h3 className="day-item__name">{date.substr(0, 3)}</h3>
            <div className="day-item__icon">
                <WeatherIconSvgSelector id={icon} />
            </div>
            <div className="day-item__temp">
                <span>{alignmentMinus(temp)}</span>{Math.abs(Math.round(temp))}<span>&deg;</span>
            </div>
            <div className="day-item__temp-name">{main.toUpperCase()}</div>
        </div>
    )
}

export default WeatherDayItem;