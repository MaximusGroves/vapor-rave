import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Vapor from "./Vapor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Vapor />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
