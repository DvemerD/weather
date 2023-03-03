import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';

import ChangeCssRootVariables from './model/ChangeCssRootVariables';
import useRoutes from "./routes";

import AppHeader from './shared/appHeader/AppHeader';
import BurgerMenu from './shared/burgerMenu/BurgerMenu';

const App = () => {
    const { themeMode, userData } = useSelector(state => state);
    const isAuthenticated = !!userData.token;
    const routes = useRoutes(isAuthenticated);

    useEffect(() => {
        ChangeCssRootVariables(themeMode);
    }, [themeMode]);

    return (
        <Router>
            {isAuthenticated &&
                <>  <AppHeader />
                    <BurgerMenu />
                </>
            }
            {routes}
        </Router>
    )
}

export default App;