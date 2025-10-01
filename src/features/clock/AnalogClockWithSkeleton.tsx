import { useState, useEffect } from "react";
import Clock from "react-clock";
import Skeleton from "@mui/material/Skeleton";
import { useTheme } from "@mui/material/styles";

type AnalogClockProps = {
    size?: number;
    loading?: boolean;
};

function AnalogClock({ size = 100, loading = false }: AnalogClockProps) {
    const [value, setValue] = useState(new Date());
    const theme = useTheme();

    useEffect(() => {
        if (loading) return;
        const interval = setInterval(() => setValue(new Date()), 1000);
        return () => clearInterval(interval);
    }, [loading]);

    if (loading) {
        return (
            <Skeleton
                variant="circular"
                width={size}
                height={size}
                sx={{
                    bgcolor:
                        document.documentElement.classList.contains("dark")
                            ? theme.palette.grey[800]
                            : theme.palette.grey[300],
                }}
            />
        );
    }

    return <Clock renderNumbers={true} value={value} size={size} />;
}

export default AnalogClock;
