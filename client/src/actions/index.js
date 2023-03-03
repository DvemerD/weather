export const menuChangeActive = () => {
    return {
        type: 'MENU_CHANGE_ACTIVE'
    }
}

export const themeModeChange = () => {
    return {
        type: 'THEME_MODE_CHANGE'
    }
}

// CURRENT WEATHER

export const currentWeatherFetching = () => {
    return {
        type: 'CURRENT_WEATHER_FETCHING'
    }
}

export const currentWeatherFetched = (currentWeather) => {
    return {
        type: 'CURRENT_WEATHER_FETCHED',
        payload: currentWeather
    }
}

export const currentWeatherFetchingError = () => {
    return {
        type: 'CURRENT_WEATHER_FETCHING_ERROR'
    }
}

export const currentWeatherClear = () => {
    return {
        type: 'CURRENT_WEATHER_CLEAR'
    }
}

export const addCityWeatherList = (nameCity) => {
    return {
        type: 'ADD_CITY_WEATHER_LIST',
        payload: nameCity
    }
}

export const deleteCityWeatherList = (city) => {
    return {
        type: 'DELETE_CITY_WEATHER_LIST',
        payload: city
    }
}

export const clearCityWeatherList = () => {
    return {
        type: 'CLEAR_CITY_WEATHER_LIST'
    }
}

// LOGIN

export const loginUserData = (userData) => {
    return {
        type: 'LOGIN_USER_DATA',
        payload: userData
    }
}

export const logoutUserData = () => {
    return {
        type: 'LOGOUT_USER_DATA'
    }
}