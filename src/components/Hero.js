import React from "react";
// import { graphql, useStaticQuery } from 'gatsby';
import { mainLogo } from "./helpers/logos";
import Formulario from "./Formulario";
import PropTypes from "prop-types";
// import Countdown from 'react-countdown';
import Counter from "./Counter";

const Hero = (props) => {
  return (
    <section className="grid bg-gray-100 pb-6 md:grid-cols-2 md:py-8">
      <div className="flex flex-col items-center justify-center">
        <span className="scale-75 transform md:mb-4 md:scale-100">
          {mainLogo}
        </span>
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-2xl">te invita al</p>
          <h1 className="text-2xl font-bold uppercase text-primary md:mb-4 md:text-3xl">
            Taller Gratuito
          </h1>
          <div className="flex justify-items-center gap-3">
            <p className="text-center uppercase">
              <span className="text-2xl font-bold">vende</span> <br /> tu
              consulta
            </p>
            <div className="border-l-8 border-mango" />
            <p className="text-center uppercase">
              <span className="text-2xl font-bold">gana</span> <br /> lo que
              mereces
            </p>
          </div>
          <p className="m-2 rounded-full bg-secondary px-4 py-1 text-lg text-white">
            Del 25 al 31 de Mayo 2022
          </p>
        </div>
      </div>
      <div className="text-center align-middle">
        <p
          className="text-md my-2 px-2 text-primary md:text-xl"
          ref={props.formRef}
        >
          <span className="font-semibold ">
            Descubre la estrategia comprobada
          </span>{" "}
          para conseguir pacientes en redes sociales, aunque no tengas
          experiencia previa ni conocimientos o estudios de marketing.
        </p>

        <Formulario />
        <div className="mt-8 text-2xl">
          <p className="mb-4">La oportunidad de registro expira en:</p>
          <div className="flex justify-center">
            <Counter date={Date.now() + 4000000} />
          </div>
        </div>
        <p className="font-3xl py-4 font-semibold text-primary">
          Descubre como ofrecer <br /> y vender tu consulta online
        </p>
      </div>
    </section>
  );
};

export default Hero;

Hero.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
