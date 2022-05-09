import React, { useRef } from "react";
import SEO from "../components/seo";
import Sociales from "../components/Sociales";
import Anfrition from "../components/Anfrition";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
// import { navigate } from "gatsby";
import Closed from "../components/Closed";
import HeroB from "../components/HeroB";
import SesionesB from "../components/SesionesB";
// import Countdown from "react-countdown";

function IndexPage() {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "ViewContent");
    }
  }
  const formRef = useRef();
  function handleBackClick() {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  }

  const show = true;

  // React.useEffect(() => {
  //   navigate("/vv");
  // }, []);

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
            <HeroB formRef={formRef} />
          </section>
          <div>
            <section>
              <SesionesB />
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
      ) : (
        <Closed />
      )}
    </>
  );
}

export default IndexPage;

IndexPage.propTypes = {
  ref: PropTypes.oneOfType([PropTypes.func]),
};