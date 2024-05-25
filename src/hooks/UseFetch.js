import { useCallback, useEffect, useState } from "react";

export const useFetch = (collectionName) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const url = `https://nasirbackend.pythonanywhere.com/${collectionName}`;

    const fetchData = useCallback(async () => {
        const options = {
            method: 'GET', // or 'POST', 'PUT', etc.
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0dc19eab8765757454d8310452d0d338b634ad47',
            },
        };

        try {
            setIsLoading(true);
            const response = await fetch(url, options);
            const json = await response.json();
            setData(json);
        } catch (err) {
            setErr(err);
        } finally {
            setIsLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, err, isLoading };
};
