import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainButton from "./components/MainButton";
import Matter from "./components/Matter";
import ProjectSec from "./components/ProjectSec";
import Swiper from "./components/Swiper";
function App() {
  return (
    <>
      <section className="flex flex-col justify-between h-screen">
        <Matter id="particles" />
        <Header />
        <Main />
        <MainButton />
      </section>
      <section className="w-full bg-[#111]">
        <ProjectSec />
        <Swiper />
        <Contact />
        <Footer />
      </section>
    </>
  );
}

export default App;
