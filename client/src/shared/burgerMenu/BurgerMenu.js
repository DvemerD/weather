import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../hooks/auth.hook';
import classNames from 'classnames';

import { menuChangeActive, clearCityWeatherList } from '../../actions';

import GlobalSvgSelector from '../../assets/icons/GlobalSvgSelector';

import './burgerMenu.scss';

const BurgerMenu = () => {
    const { menuActive, userData } = useSelector(state => state);
    const dispatch = useDispatch();
    const { logout } = useAuth();

    const overlayClass = classNames("overlay", { "overlay_active": menuActive }),
        menuClass = classNames("menu", { "menu_active": menuActive });

    const onMenuActive = () => {
        dispatch(menuChangeActive());
    }

    const onLogout = () => {
        onMenuActive();
        dispatch(clearCityWeatherList());
        logout();

    }

    return (
        <>
            <div className={overlayClass}
                onClick={(e) => { return e.target.className.indexOf('overlay', 1) > 0 ? onMenuActive() : null }}>
            </div>
            <div className={menuClass}>
                <div className="menu__wrapper">
                    <div className="menu__header">
                        <div className="menu__title">WELCOME BACK
                            <span className="menu__close"
                                onClick={() => onMenuActive()}>&#10006;</span>
                        </div>
                        <div className="menu__user">
                            <div className="menu__thumbnail">
                                <GlobalSvgSelector id={'user'} />
                            </div>
                            <div className="menu__mail">{userData.email}</div>
                        </div>
                    </div>
                    <div className="menu__list">
                        <Link to="/"
                            className="menu__list-item"
                            onClick={() => onMenuActive()}>Home</Link>
                        <Link to="/search-city"
                            className="menu__list-item"
                            onClick={() => onMenuActive()}>Add City</Link>
                        <div className="menu__list-item"
                            onClick={() => onLogout()}>Logout</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BurgerMenu;