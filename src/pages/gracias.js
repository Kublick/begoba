import React from "react";
import { mainLogo } from "../components/helpers/logos";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Gracias = () => {
  const data = useStaticQuery(
    graphql`
      {
        desktop: file(relativePath: { eq: "Berenice_profile.jpeg" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 320, layout: CONSTRAINED)
          }
        }
      }
    `
  );

  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "CompleteRegistration");
    }
  }

  return (
    <div>
      <div className="flex scale-75 transform justify-center">{mainLogo}</div>
      <div className="bg-primary-light p-8 lg:px-20">
        <h1 className="text-center text-2xl lg:text-4xl">
          Para finalmente <span className="font-semibold">COMPLETAR</span> tu{" "}
          <span className="font-semibold">REGISTRO</span> faltan
          <span className="font-semibold"> DOS PASOS</span> muy pequeños e
          IMPORTANTES
        </h1>
        <div className="my-6 grid md:grid-cols-2">
          <div className="box">
            <div className="flex justify-center">
              <GatsbyImage
                image={data.desktop.childImageSharp.gatsbyImageData}
                className="circle m-4 scale-75 transform"
                alt="Imagen Berenice"
              />
            </div>
            <p className="pb-8 text-center text-lg font-bold text-primary md:text-2xl">
              ¡Nos vemos en el taller!
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p>
              <span className="font-semibold">UNIRTE</span> al{" "}
              <span className="font-semibold">GRUPO PRIVADO</span> en{" "}
              <span className="font-semibold">WHATSAPP</span> para recibir todas
              las <span className="font-semibold">NOTIFICACIONES</span> de esta
              semana del <span>TALLER</span> sólo da click aquí mismo.
            </p>

            <div className="flex justify-center gap-4 align-middle">
              <button
                className="btn-green logo-container shadow-lg"
                onClick={() => {
                  window.open(
                    "https://chat.whatsapp.com/FdtfVCWhCQS31cUFLmQS6e"
                  );
                }}
              >
                Unirme AL GRUPO
              </button>
            </div>
            <p>
              Ir a tu <span className="font-semibold">BANDEJA</span> de
              <span className="font-semibold"> CORREO</span> con el cual te
              registraste a esta <span>SEMANA </span>
              del <span className="font-semibold">TALLER</span> y busca el
              <span className="font-semibold"> CORREO</span> con el
              <span className="font-semibold"> TÍTULO</span>:{" "}
              <span className="font-semibold text-primary">
                [IMPORTANTE] tu cupo esta confirmado{" "}
              </span>
            </p>

            <p>
              En este <span className="font-semibold"> CORREO </span>
              viene un <span className="font-semibold"> LINK </span>
              que tendrás que <span className="font-semibold"> PRESIONAR </span>
              para
              <span className="font-semibold"> AUTORIZARME </span> a que te{" "}
              <span className="font-semibold"> ENVÍE </span>
              por este medio el
              <span className="font-semibold"> CUADERNO DE TRABAJO </span>
              con el cual vamos a entrenar juntos y los detalles del taller como
              el temario y los horarios, si no lo haces tristemente no podré
              enviártelo
            </p>
          </div>
        </div>
        <p className="font-cursive text-center text-2xl text-secondary">
          Gracias por Registrarte
        </p>
      </div>
    </div>
  );
};

export default Gracias;
