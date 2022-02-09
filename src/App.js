import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Student from './pages/Student';
import AddStudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Student/>} />
      <Route path="/add-student" element={<AddStudent/>} />
      <Route path='/edit-student/:id' element={<Editstudent/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
