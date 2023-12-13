import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "./components/CalendarComponent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CalendarComponent />} />
        Hello
      </Routes>
    </div>
  );
}

export default App;
