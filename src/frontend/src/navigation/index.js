import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Medical, FileTransfer,Meter } from "../pages";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Medical" element={<Medical />} />
        <Route path="/Meter" element={<Meter/>} />
        <Route path="/Transferfile" element={<FileTransfer />} />

      </Routes>
    </Router>
  );
};

export default index;
