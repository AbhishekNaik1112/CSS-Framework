import React from "react";
import RedAlert from "./components/RedAlert";
import Store from "./components/Store";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen">
      <Navbar />
      <RedAlert />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
