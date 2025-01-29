import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// custom
import Header from "./components/Head";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// 3rd party

function App() {
  return (
    <>
      <Header />
      <Testimonials />

      <Footer />
    </>
  );
}

export default App;
