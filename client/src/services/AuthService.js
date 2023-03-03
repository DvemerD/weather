import { useHttp } from "../hooks/http.hook";
import useAuth from '../hooks/auth.hook';

const useAuthService = () => {
    const { request, clearError, process, setProcess, error } = useHttp();
    const { login } = useAuth();

    const registerHandler = async (data) => {
        try {
            const result = await request('/api/auth/register', 'POST', { ...data });
            if (result) {
                loginHandler(data);
            }
        } catch (error) { }
    }

    const loginHandler = async (data) => {
        try {
            const result = await request('/api/auth/login', 'POST', { ...data });
            login(result);
        } catch (error) { }
    }

    return {
        registerHandler,
        loginHandler,
        clearError,
        process,
        setProcess,
        error
    }
}

export default useAuthService;