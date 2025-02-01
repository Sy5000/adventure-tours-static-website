import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// custom
import Header from "./components/Head";
import Articles from "./components/Articles";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
// mantine
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";

function App() {
  return (
    <MantineProvider>
      <>
        <Header />
        <Articles />
        <Testimonials />
        <Footer />
      </>
    </MantineProvider>
  );
}

export default App;
