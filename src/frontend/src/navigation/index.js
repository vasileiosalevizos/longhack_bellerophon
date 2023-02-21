import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Login,
  FileTransfer,
  Medical,
  Upload,
  Meter,
  User,
} from "../pages";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/User" element={<User />} />
        <Route path="Medical" element={<Medical />} />
        <Route path="/Meter" element={<Meter />} />
        <Route path="/filetransfer" element={<FileTransfer />} />
      </Routes>
    </Router>
  );
};




export default index;
