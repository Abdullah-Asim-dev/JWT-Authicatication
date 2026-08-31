
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Header/header";
import Login from "./login/login";
import Signup from "./signup/Signup";
import Dashbaord from "./Dashboard/dashboard";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Signup />}
        />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={<Dashbaord />}
        />

        {/* Unknown URL */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;

