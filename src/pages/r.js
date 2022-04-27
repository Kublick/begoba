// import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { headerLogo } from "../components/helpers/logos";
import { StaticImage } from "gatsby-plugin-image";

const Regalo = () => {
  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      window.fbq("track", "ViewContent");
    }
  }

  // React.useEffect(() => {
  //   navigate("/");
  // }, []);

  const manual =
    "https://incrementafiles.s3.us-west-1.amazonaws.com/Manual-TallerInternacional.pdf";

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="my-4 flex justify-center">
          <span className="mb-4 scale-125 transform">{headerLogo} </span>
        </div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-center text-2xl font-bold text-primary">
          !Felicidades por haber tomado acción y gracias por tu confianza!
        </h1>
        {/* <img
          src="https://media.giphy.com/media/3oz8xBkRsgPTnbK1GM/source.gif"
          className="regalo__img"
          alt="regalo"
        /> */}

        <StaticImage
          src="../images/Portada.png"
          alt="Portada"
          className="my-6 cursor-pointer"
          onClick={() => window.open(manual)}
        />

        <button className="btn-main px-6" onClick={() => window.open(manual)}>
          Abrir mi Regalo
        </button>
      </div>
    </>
  );
};

export default Regalo;
