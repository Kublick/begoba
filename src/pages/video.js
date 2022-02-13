import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [playing, setPlaying] = useState(true);

  const handleProgress = (e) => {
    if (e.playedSeconds >= 9351) {
      setPlaying(false);
    }
  };
  return (
    <div>
      <div className="pb-8 bg-primary">
        <div className="flex justify-center">
          <div className="w-48 px-6 pb-6 mb-4 bg-white rounded-b-lg shadow-xl lg:w-64">
            <div className="">
              <StaticImage
                src="../images/Incremnta_lateral.png"
                className="mt-4"
                alt="logo lateral"
              />
            </div>
          </div>
        </div>
        <div className="mx-4 mt-4 text-lg font-bold text-center text-white md:text-3xl md:mx-20">
          <p>
            Mira este video explicativo con todos los detalles del entrenamiento
            <span className="text-mango"> INCREMENTA TU CONSULTA.</span>
          </p>
          <p>
            El Martes 15 de Febrero entre las 9:00 am y las 11:00 am será tu
            última oportunidad de entrar
          </p>
        </div>
      </div>
      <div className="mx-4 my-8 bg-white md:mx-20 md:my-20">
        <div className="player-wrapper">
          <ReactPlayer
            url={"https://youtu.be/q0LBG3uvFV4?t=5579"}
            playing={playing}
            onProgress={(e) => handleProgress(e)}
            controls={false}
            className="react-player"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Video;
