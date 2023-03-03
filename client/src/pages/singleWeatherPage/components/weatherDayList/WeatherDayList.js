import WeatherDayItem from '../weatherDayItem/WeatherDayItem';

const WeatherDayList = ({ dataWeather }) => {
    const daysWeather = dataWeather.map((item, i) => {
        return (
            <WeatherDayItem key={i} data={item} />
        )
    });

    const { main: { temp, humidity } } = dataWeather[0];

    return (
        <>
            <div className="days-list">
                {daysWeather}
            </div>
            <div className="days__avg">
                <div className="days__avg-item">
                    <div className="days__avg-name">Avg. Temp:
                        <span className="days__avg-temp degrees"> {Math.round(temp)}&deg;</span>
                    </div>
                </div>
                <div className="days__avg-item">
                    <div className="days__avg-name">Avg. Humd:
                        <span className="days__avg-humb"> {humidity}%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherDayList;