import { useDispatch } from 'react-redux';
import { useCallback, useEffect } from 'react';
import {
    loginUserData,
    logoutUserData
} from '../actions';

const storageName = 'userData';

const useAuth = () => {
    const dispatch = useDispatch();

    const login = useCallback((userData) => {
        dispatch(loginUserData(userData || {})); // {} if no userData
        localStorage.setItem(storageName, JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        dispatch(logoutUserData())

        localStorage.removeItem(storageName);
    }, [])

    useEffect(() => {
        const dataStorage = localStorage.getItem(storageName) === 'undefined' ? '{}' 
            : localStorage.getItem(storageName);
            
        const data = JSON.parse(dataStorage); 
       
        if (data && data.token) {
            login(data);
        }

    }, [login]);
    return { login, logout }
}

export default useAuth;