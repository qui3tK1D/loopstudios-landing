import React from "react";
import { NavBar, Hero, Feature, Creation, Footer } from "./components";

const App = () => {
  return (
    <>
      <section id="hero">
        <div className="section">
          <NavBar />
          <Hero />
        </div>
      </section>
      <main>
        <section
          id="feature"
          className="max-w-7xl mx-auto px-6 md:px-0 lg:px-16"
        >
          <Feature />
        </section>
        <section className="section">
          <Creation />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default App;
