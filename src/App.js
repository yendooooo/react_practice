import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Student from './pages/Student';
import AddStudent from './pages/Addstudent';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Student/>} />
      <Route path="/add-student" element={<AddStudent/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
