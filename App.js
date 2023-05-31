import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchWithoutButton from "./SearchWithoutButton";
import SearchWithButton from "./SearchWithButton";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Button from "./Button";
import Tabel from "./Tabel";

function App() {
  

  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Button/>} />
      <Route path="/:volume/:issue" element={<Tabel/>} />

  </Routes>
  
  </BrowserRouter>
  )
}

export default App;
