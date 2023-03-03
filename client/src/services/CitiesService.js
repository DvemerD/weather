import { useSelector } from "react-redux";
import { useHttp } from "../hooks/http.hook";

const useCitiesService = () => {
    const { request, clearError, process, setProcess } = useHttp();
    const { userData } = useSelector(state => state);
    
    const getCities = async () => {
        const result = await request('/api/cities/', 'GET', null, {
            Authorization: `Bearer ${userData.token}`
        });
        
        return result;
    }

    const addCities = async (name) => {
        const result = await request('/api/cities/add', 'POST', { name }, {
            Authorization: `Bearer ${userData.token}`
        });
        return result;
    }

    const deleteCity = async (id) => {
        const result = await request(`/api/cities/${id}`, 'DELETE', null, {
            Authorization: `Bearer ${userData.token}`
        });
        return result;
    }

    return {
        getCities,
        addCities,
        deleteCity,
        process
    }
}

export default useCitiesService;