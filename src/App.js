import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./App.css";

import { getAllCourses } from "./store/coursesSlice";
import HomePage from "./pages/homePage/homePage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/home/navbar/Navbar";
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  return (
    <div className={"app"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:searchStr" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
