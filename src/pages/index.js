import React, { useRef } from "react";
import SEO from "../components/seo";
import Hero from "../components/Hero";
import Sesiones from "../components/Sesiones";
import Sociales from "../components/Sociales";
import Anfrition from "../components/Anfrition";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { navigate } from "gatsby";
// import Closed from '../components/Closed';

// import Countdown from "react-countdown";

function IndexPage() {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      // window.fbq("track", "PageView");
      window.fbq("track", "ViewContent");
    }
  }

  const formRef = useRef();

  function handleBackClick() {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const show = false;

  React.useEffect(() => {
    navigate("/vv");
  }, []);

  return (
    <>
      <SEO
        keywords={[
          `psicologo`,
          `curso`,
          `pacientes`,
          `formacion`,
          `nutriologos`,
          `medicos`,
          `fisioterapeutas`,
        ]}
        title="Incrementa tu numero de pacientes"
      />
      {show ? (
        <>
          <section>
            <Hero formRef={formRef} />
          </section>
          <div>
            <section>
              <Sesiones />
            </section>
          </div>

          <section>
            <Sociales handleBackClick={handleBackClick} />
          </section>

          <section>
            <Anfrition />
          </section>
          <footer>
            <Footer handleBackClick={handleBackClick} />
          </footer>
        </>
      ) : null}
    </>
  );
}

export default IndexPage;

IndexPage.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func]),
};
