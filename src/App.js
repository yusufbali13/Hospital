import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes />
      <Home />
      <People />
      <Contact />
      <NotFound />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
