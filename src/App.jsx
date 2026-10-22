import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Applayout from "./layout/Applayout";
import DashboardScreen from "./screen/Dashboardscreen";
import StudentScreen from "./screen/StudentScreen";
import PageNotFound from "./screen/PageNotFound";
import RegisterScreen from "./screen/Registerscreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/" element={<Applayout />}>
          <Route index element={<DashboardScreen />} />
          <Route path="student" element={<StudentScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;