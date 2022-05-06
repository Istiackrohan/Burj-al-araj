import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Book from './components/Book/Book';
import Header from './components/Header/Header';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';
import GuestRoute from './components/Routes/GuestRoute';
import Error from './components/Error/Error';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        {/* <Route path="/*" element={<GuestRoute />}> */}
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route exact path="" element={<Home />} />
        {/* </Route> */}
        <Route path="/*" element={<PrivateRoute />}>
          <Route path="book" element={<Book />} />
          <Route path="book/:bedType" element={<Book />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
