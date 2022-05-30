import React, { useState } from "react";
import { useGetUrls } from "../hooks/useGetUrls";
import usePostUrl from "../hooks/usePostUrl";

const Cw = () => {
  const urls = useGetUrls();

  const [group, setGroup] = useState(urls);
  const [updated, setUpdated] = useState(false);

  const handleInputChange = (e) => {
    setGroup(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    usePostUrl({ group });
    setUpdated(true);
  };

  return (
    <div>
      <form className="flex flex-col w-3/4 gap-2 m-8" onSubmit={handleSubmit}>
        <label htmlFor="">Actualizar grupo Whatsapp</label>
        <input
          type="text"
          placeholder={urls}
          onChange={handleInputChange}
          value={group}
          className="border-2 border-blue-500"
        />
        <button
          type="submit"
          className="mt-8 font-bold text-white uppercase md:px-12 lg:px-24 h-14 bg-whatsapp md:mt-0 bg-green-400"
        >
          Actualizar
        </button>
      </form>
      {updated && (
        <p className="text-center text-primary">
          Grupo Whatsapp actualizado con: {group}{" "}
        </p>
      )}
    </div>
  );
};

export default Cw;
