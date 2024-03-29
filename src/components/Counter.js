import React from "react";
import Countdown from "react-countdown";
import PropTypes from "prop-types";

const Counter = ({ date }) => {
  let eventDate = date;

  const renderer = ({ days, hours, minutes, seconds }) => {
    let timeDay = "D";
    let timeHour = "H";
    let timeMinutes = "M";
    let timeSeconds = "S";

    if (days < 2) {
      timeDay = "D";
    }

    if (hours < 2) {
      timeHour = "H";
    }

    if (timeMinutes >= 2) {
      timeMinutes = "minuto";
    }

    return (
      <div className="flex gap-4 counter-num">
        <div className="flex flex-col items-center w-16 p-2 text-white bg-black rounded-md lg:p-4">
          <p className="text-xl lg:text-3xl">{days}</p> <p>{timeDay}</p>
        </div>
        <div className="flex flex-col items-center w-16 p-2 text-white bg-black rounded-md lg:p-4">
          <p className="text-xl lg:text-3xl">{hours}</p>
          <p>{timeHour}</p>
        </div>
        <div className="flex flex-col items-center w-16 p-2 text-white bg-black rounded-md lg:p-4">
          <p className="text-xl lg:text-3xl">{minutes}</p>
          <p>{timeMinutes}</p>
        </div>

        <div className="flex flex-col items-center w-16 p-2 text-white bg-black rounded-md lg:p-4">
          <p className="text-xl lg:text-3xl">{seconds}</p>
          <p>{timeSeconds}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="grid ">
        {/* <p>la clase comienza en</p> */}
        <Countdown date={eventDate} renderer={renderer} />
      </div>
    </>
  );
};

export default Counter;

Counter.propTypes = {
  date: PropTypes.instanceOf(Date),
};
