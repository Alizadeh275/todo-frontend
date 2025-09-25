import AnalogClock from "./components/Clock/AnalogClock";
import TodosContainer from "./components/Todos/TodosContainer"

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh",padding:0,margin:0, }}>
      <div style={{ position: "absolute", top: 0, left: 0, marginLeft: 10 }}>
        <AnalogClock size={150} /> 
      </div>
    
        <TodosContainer />
    </div>
  );
}

export default App;
