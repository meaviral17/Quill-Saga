import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage></LoginPage>} />
          <Route path="/home" element={<HomePage></HomePage>} />
          <Route
            path="/profile/:userId"
            element={<ProfilePage></ProfilePage>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
