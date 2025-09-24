import { useState, useEffect } from "react";
import Clock from "react-clock";
import 'react-clock/dist/Clock.css';

function AnalogClock({ size = 100 }: { size?: number }) { // default size 100
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return <Clock renderNumbers={true} value={value} size={size} />;
}

export default AnalogClock;
