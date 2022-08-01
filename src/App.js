import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./components/Pages/HomePage";
import Geography from "./components/Pages/Geography";
import Climate from "./components/Pages/Climate"
import Wine from "./components/Pages/Wine";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/climate" element={<Climate />} />
          <Route path="/wine" element={<Wine />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

