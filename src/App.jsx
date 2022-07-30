// import Navbar from "./Components/Navbar/Navbar";
// import Hero from "./Components/Hero/Hero";
// import "./App.css";
// import Memories from "./Components/Memories/Memories";
// import Facilities from "./Components/Facilities/Facilities";
// import About from "./Components/About/About";
// import { Typography } from "@mui/material";
// import Testimonials from "./Components/Testimonials/Testimonials";
// import Gallery from "./Components/Gallery/Gallery";
// import Contact from "./Components/Contact/Contact";
// import Footer from "./Components/Footer/Footer";
// import Aos from "aos";
// import React,{ useEffect } from "react";

// const App = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);

//   const HeroRef = React.useRef();
//   const MemoriesRef = React.useRef();
//   const FacilitiesRef = React.useRef();
//   const AboutRef = React.useRef();
//   const TestimonialsRef = React.useRef();
//   const GalleryRef = React.useRef();
//   const ContactRef = React.useRef();

//   return (
//     <>
//       <Navbar
//         Hero={HeroRef}
//         Memories={MemoriesRef}
//         Facilities={FacilitiesRef}
//         About={AboutRef}
//         Testimonials={TestimonialsRef}
//         Gallery={GalleryRef}
//         Contact={ContactRef}
//       />
//       <div style={{ width: "100vw" }}>
//         <div style={{ width: "80%", margin: "auto" }}>
//           <Hero ref={HeroRef} />
//           <Memories ref={MemoriesRef} />
//           <Facilities ref={FacilitiesRef} />
//           <About ref={AboutRef} />
//           <Typography
//             variant="h2"
//             component={"h1"}
//             style={{
//               textAlign: "center",
//               fontWeight: "600",
//               fontSize: window.innerWidth <= 425 && "2.5rem",
//             }}
//           >
//             What our <span style={{ color: "orangered" }}>Customer</span> say
//           </Typography>
//           <Testimonials ref={TestimonialsRef} />
//           <Gallery ref={GalleryRef} />
//           <Contact ref={ContactRef} />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default App;
import { useRoutes } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"

const App = () => {
  let router = useRoutes([
    {path:"/",element:<Home />},
    {path:"/home",element:<Home />},
    {path:"*",element:<NotFound />},
  ])

  return router
}

export default App
