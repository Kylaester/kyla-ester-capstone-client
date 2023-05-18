import Hero from "../../Components/Hero/Hero.js";
import Nav from "../../Components/Nav/Nav.js";
import SideBar from "../../Components/SideBar/SideBar.js";
import "./Home.scss";

function Home() {
  return (
    <>
      <section className="Background">
        <Nav />
        <Hero />
        <SideBar />
      </section>
    </>
  );
}

export default Home;
