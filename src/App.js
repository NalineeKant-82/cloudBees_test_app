import "./App.css";
import {BrowserRouter} from "react-router-dom"
import LandingPage from "./landing";
function App() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <BrowserRouter>
      <LandingPage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
