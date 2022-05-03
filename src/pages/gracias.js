import React from "react";
import { mainLogo } from "../components/helpers/logos";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useGetUrls } from "../hooks/useGetUrls";

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

  const { url, loading, error } = useGetUrls();

  const handleButton = () => {
    if (loading)
      return (
        <button
          className="btn-green logo-container shadow-lg flex py-2"
          disabled
        >
          <svg
            role="status"
            className="w-8 h-8 mr-2 text-white animate-spin dark:text-green-600 fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          Cargando Grupo ..
        </button>
      );
    else {
      return (
        <button
          className="btn-green logo-container shadow-lg py-2"
          onClick={() => {
            window.open(url, "_blank");
          }}
        >
          Unirme AL GRUPO
        </button>
      );
    }
  };

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
              <span className="font-semibold">TELEGRAM</span> para recibir todas
              las <span className="font-semibold">NOTIFICACIONES</span> de esta
              semana del <span>TALLER</span> sólo da click aquí mismo.
            </p>

            <div className="flex justify-center gap-4 align-middle">
              {error === "" ? (
                handleButton()
              ) : (
                <p className=" bg-whats p-4 rounded-lg text-white font-semibold">
                  {error}
                </p>
              )}
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
