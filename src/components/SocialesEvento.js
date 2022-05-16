import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { fbmango, movie, notebook, wsmango, live } from "./helpers/logos";
import PropTypes from "prop-types";
import Modal from "./Modal";

const SocialesEvento = () => {
  const data = useStaticQuery(
    graphql`
      {
        mobile: file(relativePath: { eq: "Ft1 460x427px.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, width: 460, layout: CONSTRAINED)
          }
        }
        desktop: file(relativePath: { eq: "Ft1 964x460px-03.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 964, layout: CONSTRAINED)
          }
        }
      }
    `
  );

  return (
    <div className="p-5 mt-10 md:px-20 lg:pb-20 bg-primary-light">
      <h1 className="mb-10 md:my-20 title">Que incluye</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="flex flex-col">
          <div>
            <GatsbyImage
              image={data.desktop.childImageSharp.gatsbyImageData}
              className="rounded-lg shadow-2xl "
              alt="persona frente a computadora"
            />
            <div className="flex justify-end mt-10">
              {/* <button
                className="w-full mt-8 btn-main"
                onClick={props.handleModal}
              >
                !Quiero mi Lugar GRATIS para el Entrenamiento!
              </button> */}
              <Modal />
            </div>
          </div>
        </div>
        <div className="grid items-center grid-cols-4 gap-y-4 md:gap-y-0">
          <span className="logo-fb">{fbmango} </span>

          <p className="col-span-3 text-sm font-semibold">
            Pertencer a la comunidad del grupo exclusivo en Facebook
          </p>
          <span className="flex items-center gap-2">{movie}</span>
          <p className="col-span-3 font-semibold">Transmisión en vivo</p>
          <span className="logo-ws">{notebook} </span>
          <p className="col-span-3 font-semibold ">
            Cuaderno de trabajo del taller
          </p>
          <span className="logo-ws">{wsmango} </span>
          <p className="col-span-3 font-semibold">
            Serás parte de la comunidad dentro del grupo de Whatsapp para
            notificaciones
          </p>
          <span className="logo-live">{live}</span>
          <p className="col-span-3 font-semibold">
            Participación en vivo en la clase especial número 5
          </p>
          <p className="col-span-4 text-3xl text-center">
            Total: $ <span className="line-through">97 usd</span>{" "}
            <span className="font-bold text-secondary">GRATIS</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialesEvento;

SocialesEvento.propTypes = {
  handleModal: PropTypes.func,
};
