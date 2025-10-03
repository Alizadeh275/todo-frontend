import { useState, useEffect } from "react";
import Clock from "react-clock";

type AnalogClockProps = {
    size?: number;
};

function AnalogClock({ size = 100 }: AnalogClockProps) {
    const [value, setValue] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);


    return <Clock renderNumbers={true} value={value} size={size} />;
}

export default AnalogClock;
