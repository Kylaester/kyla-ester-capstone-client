import Nav from "../Components/Nav/Nav.js";

import "./Home/Home.js";
import HeroLessons from "../Components/HeroLessons/HeroLessons.js";

function Lessons() {
  return (
    <>
      <section className="Background">
        <Nav />
        <HeroLessons />
      </section>
    </>
  );
}

export default Lessons;
