// import { navigate } from "gatsby";
import React from "react";
import Countdown from "react-countdown";
import { headerLogo } from "../components/helpers/logos";
import Venta from "../components/Venta";
import Videoplayer from "../components/Videoplayer";

const VideoVenta = () => {
  // useEffect(() => {
  //   navigate("/");
  // }, []);
  let view = true;

  const renderer = ({ days, hours, minutes, seconds }) => {
    let queda = "Quedan";
    let dias = "días";
    if (days < 2) {
      dias = "dia";
      queda = "Queda";
    }

    return (
      <div className="text-center">
        {days < 1 ? (
          <p>
            Ultimo Dia hoy cerramos inscripciones
            <br /> {hours} horas {minutes} minutos {seconds} segundos{" "}
          </p>
        ) : (
          <p className="text-xl lg:text-5xl">
            {queda} {days} {dias} y se cierran inscripciones
          </p>
        )}
      </div>
    );
  };

  const eventDate = new Date("5 February 2022 00:00");

  return (
    <>
      {view ? (
        <div>
          <div className="bg-gray-100 py-10">
            <div className="my-4 flex justify-center">
              <span className="mb-4 scale-125 transform">{headerLogo} </span>
            </div>

            <div className="flex flex-col items-center gap-2 bg-mango py-6 font-bold text-white">
              <Countdown date={eventDate} renderer={renderer} />
            </div>

            <div className="flex flex-col gap-4 py-10">
              <div className="col-span-2 px-10">
                <Videoplayer
                  url={"https://youtu.be/q0LBG3uvFV4?start=5m34s"}
                  controls={false}
                  playing={true}
                />
              </div>
              <div className="mt-4 flex flex-col items-center gap-4 md:text-lg ">
                <h1 className="text-center text-xl font-bold md:text-3xl">
                  ¡Tu ya eres éxito! Solo hagamos que se manifieste
                </h1>
              </div>
            </div>
            <Venta />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VideoVenta;
