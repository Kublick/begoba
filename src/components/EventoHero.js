import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { mainLogo } from "./helpers/logos";
import Modal from "./Modal";
// import PropTypes from "prop-types";

export const EventoHero = () => {
  const data = useStaticQuery(
    graphql`
      {
        desktop: file(relativePath: { eq: "Berenice_profile.jpeg" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 420, layout: CONSTRAINED)
          }
        }
      }
    `
  );

  return (
    <div className="mx-2">
      <div className="p-4 sm:justify-evenly sm:flex">
        <div className="flex flex-col items-center justify-center">
          <span className="transform scale-75 md:mb-4 md:scale-100">
            {mainLogo}
          </span>
          <div className="flex flex-col items-center">
            <p className="text-2xl tracking-wider text-gray-600 md:text-4xl">
              Entrenamiento Gratuito
            </p>
            <h1 className="text-4xl font-bold uppercase text-primary md:mb-4 md:text-6xl">
              IMPULSA
            </h1>
            <p className="text-3xl text-center text-gray-600 md:text-6xl font-dancing">
              Tu Consulta
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <GatsbyImage
            image={data.desktop.childImageSharp.gatsbyImageData}
            className="border-[14px] rounded-3xl border-primary -scale-x-100 "
            alt="Imagen Berenice"
          />
        </div>
      </div>
      <div className="container flex flex-col items-center mt-12 text-center sm:text-3xl">
        <p>En Este Entrenamiento Gratuito, Descubrirás:</p>
        <p className="px-4 tracking-wider text-center ">
          Cómo Tener Un Negocio De Consulta Exitoso, Con Servicios Y Precios
          Correctos, Con Estrategias Sencillas Y Fáciles De Implementar Que Te
          Generen Más Utilidades
        </p>
      </div>
      <div className="my-10">
        <Modal />
      </div>
    </div>
  );
};
export default EventoHero;
