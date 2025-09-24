import AnalogClock from "./components/Clock/AnalogClock";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh",padding:0,margin:0, }}>
      <div style={{ position: "absolute", top: 0, left: 0, marginLeft: 10 }}>
        <AnalogClock size={150} /> 
      </div>
    
        <Todos />
    </div>
  );
}

export default App;
