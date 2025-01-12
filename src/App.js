import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import Exhibition from "./pages/exhibition/Exhibition";
import Languages from "./pages/languages/Languages";
import Player from "./pages/player/Player";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Exhibition />} />
                <Route path="/languages" element={<Languages />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/play" element={<Player />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
