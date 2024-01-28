import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./component/MainHeader";
import Pigg from "./component/piggy_bank_component/Pigg";
import Budget from "./component/budget/Budget";
import Home from "./component/Home";
import FonButton from "./component/FonButton";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pigg" element={<Pigg />} />
            <Route path="/budget" element={<Budget />} />
          </Routes>
        </Router>

        <FonButton />
        
      </div>
    </div>
  );
}
export default App;
