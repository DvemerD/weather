import { useState, useCallback } from "react";

export const useHttp = () => {
    const [process, setProcess] = useState('waiting');
    const [error, setError] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {

        setProcess('loading');
        try {
            if (body) {
                body = JSON.stringify(body);
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, { method, body, headers });

            const data = await response.json();

            if (!response.ok) {
                console.log(`Could not fetch ${url}, status: ${response.status}`);
                throw new Error(data.message || 'Something went wrong');
                //throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            setError(null);
            return data;
        } catch (e) {
            setProcess('error');
            setError(e.message);
            // throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        // setProcess('loading');
        setError(null);
    }, []);

    return { request, clearError, process, setProcess, error };
}