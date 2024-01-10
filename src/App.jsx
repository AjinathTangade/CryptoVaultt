import "./App.css";
import Cta from "./components/Cta";
import Header from "./components/Header";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Feature from "./components/Feature";
import LivePrice from "./components/LivePrice";
import ChooseUs from "./components/ChooseUs";
import Offer from "./components/Offer";
import Roadmap from "./components/Roadmap";
import Testimonial from "./components/Testimonial";
import Team from "./components/Team";
import Trade from "./components/Trade";
import Blog from "./components/Blog";
import StartTrading from "./components/StartTrading";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Cta />
      <Feature />
      <LivePrice />
      <ChooseUs />
      <Offer />
      <Roadmap />
      <Testimonial />
      <Team />
      <Trade />
      <Blog />
      <StartTrading />
      <Footer />
    </>
  );
}

export default App;
