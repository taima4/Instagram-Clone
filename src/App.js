import "./App.css";
import Home from "./pages/Home";

import { Fragment } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Explore from "./pages/Explore";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";
import Create from "./pages/Create";
import Nav from './components/Nav';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: ["Poppins", "sans - serif"].join(","),
  },
});

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
        <Routes element={<Nav/>} >
          <Route element={<Home/>} path="/" />
          <Route element={<Explore/>} path="/explore" />
          <Route element={<SignUp/>} path="/signUp" />
          <Route element={<Login/>} path="/login" />
          <Route element={<Messages/>} path="/messages" />
          <Route element={<Profile/>} path="/profile" />
          <Route element={<Create/>} path="/create" />

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
