import { useState, useEffect } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';
import Skeleton from '@mui/material/Skeleton';

type AnalogClockProps = {
    size?: number;
    loading?: boolean;
};

function AnalogClock({ size = 100, loading = false }: AnalogClockProps) {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        if (loading) return; // don't start interval while loading
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => clearInterval(interval);
    }, [loading]);

    if (loading) {
        return <Skeleton variant="circular" width={size} height={size} />;
    }

    return <Clock renderNumbers={true} value={value} size={size} />;
}

export default AnalogClock;
