import React from "react";
import Header from './components/header'
import Content from './components/content'
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";

const App = () => {
  return (
    <>
      <Header/>
      <Content/>
      <About/>
      <Projects/>
      <Experience/>
      <Footer/>
      
    </>
  );
};

export default App;
