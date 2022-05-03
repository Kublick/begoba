import React from "react";
// import { graphql, useStaticQuery } from 'gatsby';
import { mainLogo } from "./helpers/logos";
import Formulario from "./Formulario";
import PropTypes from "prop-types";
// import Countdown from 'react-countdown';
import Counter from "./Counter";

const HeroB = (props) => {
  return (
    <section className="grid bg-gray-100 pb-6 md:grid-cols-2 md:py-8">
      <div className="flex flex-col items-center justify-center order-2 md:order-1">
        <span className="scale-75 transform md:mb-4 md:scale-100">
          {mainLogo}
        </span>
        <div className="flex flex-col items-center">
          <p className="text-xl md:text-2xl">te invita al</p>
          <h1 className="text-2xl font-bold uppercase text-primary md:mb-4 md:text-3xl">
            Evento Gratuito
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
      <div className="mt-10 md:mt-0 text-center align-middle order-1">
        <p
          className="text-md my-2 px-2 text-primary md:text-xl"
          ref={props.formRef}
        >
          <span className="text-2xl font-bold ">
            Como GANAR $5,000 dólares mensuales con tu consulta online
          </span>{" "}
          Aprende el sistema para incrementar tu consulta y conoce la estrategia
          probada que te ayuda aumentar tu número de pacientes en 7 días
        </p>

        <Formulario />
        <div className="mt-8 text-2xl">
          <p className="mb-4">La oportunidad de registro expira en:</p>
          <div className="flex justify-center">
            <Counter date={Date.now() + 900000} />
          </div>
        </div>
        <p className="font-3xl py-4 font-semibold text-primary">
          Descubre como ofrecer <br /> y vender tu consulta online
        </p>
      </div>
    </section>
  );
};

export default HeroB;

HeroB.propTypes = {
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]),
};
