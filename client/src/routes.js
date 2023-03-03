import { Switch, Route, Redirect } from 'react-router-dom';

import SingleSignupPage from './pages/singleFormPages/SingleSignupPage';
import SingleLoginPage from './pages/singleFormPages/SingleLoginPage';
import SingleSearchPage from './pages/singleSearchPage/SingleSearchPage';
import SingleWeatherListPage from './pages/singleWeatherListPage/SingleWeatherListPage';
import SingleWeatherPage from './pages/singleWeatherPage/SingleWeatherPage';
import Page404 from "./pages/page404/Page404";

const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route exact path="/">
                    <SingleWeatherListPage />
                </Route>
                <Route exact path="/search-city">
                    <SingleSearchPage />
                </Route>
                <Route exact path="/weather-info">
                    <SingleWeatherPage />
                </Route>
                <Route exact path="/weather-info/:nameCity">
                    <SingleWeatherPage />
                </Route>
                {/* <Route path="*">
                    <Page404 />
                </Route> */}
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path="/login">
                <SingleLoginPage />
            </Route>
            <Route exact path="/signup">
                <SingleSignupPage />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )
}

export default useRoutes;