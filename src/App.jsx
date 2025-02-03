import "./App.css";
import { MantineProvider } from '@mantine/core';
import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import FormValidation from "./pages/FormValidation";
import UseRef from "./pages/UseRef";

function App() {
  return (
    <>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formValidation" element={<FormValidation />} />
          <Route path="/useRef" element={<UseRef/>}/>
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
