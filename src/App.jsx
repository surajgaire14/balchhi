import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import "./App.css";
import Memories from "./Components/Memories/Memories";
import Facilities from "./Components/Facilities/Facilities";

const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100vw" }}>
        <div style={{ width: "80%", margin: "auto" }}>
          <Hero />
          <Memories />
          <Facilities />
        </div>
      </div>
    </>
  );
};

export default App;
