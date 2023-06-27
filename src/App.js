import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NewGraph from "./component/NewGraph";
import LoginPage from "./component/LoginPage";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <>
      <LoginPage />
      <NewGraph/>
        
    </>
  );
}
