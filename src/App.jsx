import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "@fontsource/poppins"; // Defaults to 400 weight

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
};

export default App;
