import { navigate } from "gatsby";
import React from "react";
import Countdown from "react-countdown";
import { headerLogo } from "../components/helpers/logos";
import Venta from "../components/Venta";

const VideoVenta = () => {
  // React.useEffect(() => {
  //   navigate("/");
  // }, []);
  let view = true;

  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      // window.fbq("track", "PageView");
      window.fbq("track", "AddPaymentInfo");
    }
  }

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <div className="text-center">
        <p className="text-xl lg:text-5xl">
          falta solo{" "}
          <span className="font-extrabold">
            {hours} : {minutes} : {seconds}
          </span>{" "}
          y se cierran inscripciones
        </p>
      </div>
    );
  };

  const eventDate = new Date("15 February 2022 09:00");

  if (Date.now() > eventDate.getTime()) {
    view = false;
    navigate("/");
  }

  return (
    <>
      {view ? (
        <div>
          <div className="py-10 bg-gray-100">
            <div className="flex justify-center my-4">
              <span className="mb-4 transform scale-125">{headerLogo} </span>
            </div>

            <div className="flex flex-col items-center gap-2 py-6 font-bold text-white bg-mango">
              <Countdown date={eventDate} renderer={renderer} zeroPadTime={2} />
            </div>

            <div className="flex flex-col gap-4 py-10">
              {/* <div className="col-span-2 px-10">
                <Videoplayer
                  url={"https://youtu.be/q0LBG3uvFV4?start=5m34s"}
                  playing={true}
                />
              </div> */}
              <div className="flex flex-col items-center gap-4 mt-4 md:text-lg ">
                <h1 className="text-xl font-bold text-center md:text-3xl">
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
