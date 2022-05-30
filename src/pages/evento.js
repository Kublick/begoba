import React, { useState } from "react";
import Closed from "../components/Closed";
import { EventoHero } from "../components/EventoHero";
import FooterEvento from "../components/FooterEvento";
import { Puntos } from "../components/Puntos";
import SEO from "../components/seo";
import SesionesEvento from "../components/SesionesEvento";
import SocialesEvento from "../components/SocialesEvento";

const Evento = () => {
  const show = true;

  const [isOpen, setIsOpen] = useState("false");

  function handleModal() {
    console.log("modal");
    setIsOpen(!isOpen);
  }

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
            <EventoHero isOpen={isOpen} setIsOpen={setIsOpen} />
          </section>

          <section>
            <SesionesEvento />
          </section>
          <section>
            <Puntos />
          </section>

          <section>
            <SocialesEvento handleModal={handleModal} />
          </section>
          <footer>
            <FooterEvento />
          </footer>
        </>
      ) : (
        <Closed />
      )}
    </>
  );
};

export default Evento;
