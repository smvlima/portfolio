import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.scss";
import Home from "./pages/home/home";
import Security from "./pages/security/security";
import Challenge from "./pages/challenge/challenge";
import News from "./pages/news/news";
import Faqs from "./pages/faqs/faqs";
import Nav from "./components/nav/nav";
// import Hero from "./components/hero/hero";
// import { heroes } from "./mocks/heroes";
// import Content from "./components/content/content";
// import Features from "./components/features/features";
import Pizza from "./pages/pizza/pizza";
import Users from "./pages/users/users";

function App() {
  return (
    <main>
      <div>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security" element={<Security />} />
          <Route path="/challenge" element={<Challenge />} />
          <Route path="/news" element={<News />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/users" element={<Users/>} />
        </Routes> 
        </div>
    </main>
  );
}

export default App;
