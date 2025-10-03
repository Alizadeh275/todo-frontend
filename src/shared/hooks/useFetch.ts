// hooks/useFetch.ts
import { useState, useEffect } from "react";
import axios from "axios";
import type { AxiosRequestConfig } from "axios";
import { showToast } from "../utils/toasts";

export default function useFetch<T>(url: string, config?: AxiosRequestConfig, minDelay = 4000) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            const startTime = Date.now();

            try {
                const res = await axios.get<T>(url, config);
                setData(res.data);
            } catch (err: unknown) {
                showToast("خطا در دریافت داده‌ها", "error");

                console.error(err);
            } finally {
                const elapsed = Date.now() - startTime;
                const remaining = minDelay - elapsed;

                if (remaining > 0) {
                    // Wait for remaining time to reach minDelay
                    setTimeout(() => setLoading(false), remaining);
                } else {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [url]); // memoize config if needed

    return { data, loading, error, setData, setError };
}
