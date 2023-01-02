import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AxiosUse from "./pages/AxiosUse";
import FetchUse from "./pages/fetchUse";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/fetchUse" element={<FetchUse />}></Route>
          <Route path="/axiosUse" element={<AxiosUse />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
