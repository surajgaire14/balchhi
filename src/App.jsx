import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Memories from "./Components/Memories/Memories";
import Facilities from "./Components/Facilities/Facilities";
import About from "./Components/About/About";
import { Typography } from "@mui/material";
import Testimonials from "./Components/Testimonials/Testimonials";
import Gallery from "./Components/Gallery/Gallery"
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100vw" }}>
        <div style={{ width: "80%", margin: "auto" }}>
          <Hero />
          <Memories />
          <Facilities />
          <About />
          <Typography
            variant="h2"
            component={"h1"}
            style={{ textAlign: "center", fontWeight: "600" }}
          >
            What our <span style={{ color: "orangered" }}>Customer</span> say
          </Typography>
          <Testimonials />
          <Gallery />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
