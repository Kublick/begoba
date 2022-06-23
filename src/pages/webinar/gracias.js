import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useGetUrls } from "../../hooks/useGetUrls";
import { wswhitebig } from "../../components/helpers/logos";

const Gracias = () => {
  const data = useStaticQuery(
    graphql`
      {
        desktop: file(relativePath: { eq: "webinar_bere_noback.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 90
              width: 474
              height: 620
              layout: CONSTRAINED
            )
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

  // const [whastsppUrl] = useState(
  //   "https://chat.whatsapp.com/G66dTyIDAr53wAlBl6dHFZ"
  // );

  const whatsappUrl = useGetUrls();

  return (
    <div className="flex flex-col h-screen justify-center align-middle bg-transparent">
      <div className="grid lg:grid-cols-4 bg-transparent min-h-[720px]">
        <div className="hidden py-24 md:bg-gradient-to-r from-secondary  to-white lg:grid container ">
          <GatsbyImage
            image={data.desktop.childImageSharp.gatsbyImageData}
            className="my-22 min-w-0 z-10"
            alt="Imagen Berenice"
          />
        </div>

        <div className="col-span-3 md:mx-24 mx-4 my-12">
          <div className="flex flex-col gap-6 items-center">
            <h1 className="text-xl text-secondary md:text-3xl font-bold tracking-wide ">
              ¡Felicidades tu registro esta casi listo!
            </h1>
            <p className="text-lg md:text-2xl text-center w-9/12">
              Para finalmente
              <span className="font-semibold"> COMPLETAR</span> tu{" "}
              <span className="font-semibold">REGISTRO</span> faltan{" "}
              <span className="font-semibold">DOS PASOS</span> muy pequeños e{" "}
              <span className="font-semibold">IMPORTANTES</span>
            </p>

            <p className="w-9/12 md:text-lg">
              1. Ir a tu <span className="font-semibold">BANDEJA</span> de
              <span className="font-semibold"> CORREO</span> con el cual te
              registraste a este <span>WEBINAR </span>y busca el
              <span className="font-semibold"> CORREO</span> con el
              <span className="font-semibold"> TÍTULO</span>:{" "}
              <span className="font-semibold ">
                [IMPORTANTE] tu cupo esta confirmado{" "}
              </span>
            </p>

            <p className="w-9/12 md:text-lg text-center">
              2. Unirte al <span className="font-semibold">GRUPO PRIVADO</span>{" "}
              de
              <span className="font-semibold"> Whastapp</span> para recibir
              todas las <span>NOTIFICACIONES </span>del evento y que no te
              pierdas de nada.
            </p>
          </div>
          <div className="flex justify-center gap-4 align-middle items-center ">
            <div className="btn-secondary logo-container shadow-lg flex gap-4 py-4 my-12 hover:opacity-95">
              <span className="h-8 w-8">{wswhitebig} </span>
              <button
                className="font-bold text-sm lg:text-2xl"
                onClick={() => {
                  window.open(whatsappUrl, "_blank");
                }}
              >
                Da click en el botón y ve al grupo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gracias;
