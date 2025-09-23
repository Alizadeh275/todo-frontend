// hooks/useFetch.ts
import { useState, useEffect } from "react";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";

export default function useFetch<T>(url: string, config?: AxiosRequestConfig) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get<T>(url, config);
                setData(res.data);
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message);
                else setError("خطا در بارگذاری داده‌ها");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]); // ESLint-safe, memoize config if needed

    return { data, loading, error, setData, setError };
}
