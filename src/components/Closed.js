import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import FormularioClosed from "../components/FormularioClosed";
import { useWindowSize } from "../components/helpers/useWindowSize";

const Closed = () => {
  const [windowSize, setWindowSize] = useState("640");
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 720) {
      setWindowSize(320);
    } else if (size.width > 721) {
      setWindowSize(640);
    }
  }, [size]);

  return (
    <>
      <div className="bg-primary pb-8">
        <div className="flex justify-center">
          <div className="mb-4 w-48 rounded-b-lg bg-white px-6 pb-6 shadow-xl lg:w-64">
            <div className="">
              <StaticImage
                src="../images/Incremnta_lateral.png"
                className="mt-4"
                alt="logo lateral"
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-3xl font-bold text-mango">
          <h1>!LLEGAS TARDE!</h1>
          <h1>Incrementa tu consulta ha cerrado sus puertas</h1>
        </div>
        <h1 className="mx-4 mb-8 px-5 text-center text-lg font-semibold text-white lg:mx-10 lg:my-12 lg:text-3xl">
          Incrementa tu consulta es un entrenamiento que le ha servido a
          psicólogos, nutriólogos y profesionales de la salud a incrementar su
          número de pacientes con estrategia a través de internet incluso
          empezando desde cero.
        </h1>

        <div className="mx-4 mt-6 grid gap-4 lg:grid-cols-2">
          <div className="mx-4 md:mx-14">
            <h1 className="text-md mx-4 px-5 text-center font-semibold text-white lg:mx-10 lg:text-2xl">
              Las inscripciones al programa están cerradas.
            </h1>
            <p className="py-4 text-lg text-white">
              Si quieres recibir más información sobre el programa, conocer la
              fecha de la próxima edición y acceder a contenidos para prepararte
              para hacer crecer tu lista de pacientes, déjanos tu correo y te lo
              enviamos. <br /> AVISO: las personas registradas en esta lista
              tienen prioridad en el acceso a la próxima edición. Si quieres ser
              el primero o primera en entrar en un futuro, ¡apúntate!
            </p>
          </div>
          <div className="order-first md:order-last">
            <FormularioClosed />
          </div>
        </div>
      </div>

      <div className="my-8">
        <h1 className="pb-8 text-center text-xl font-semibold text-secondary lg:text-3xl">
          Ellos también empezaron sin experiencia previa, conocimientos técnicos
          ni audiencia
        </h1>
        <h1 className="pb-8 text-center text-xl font-semibold text-secondary lg:text-3xl">
          Ahora puedes conocer sus historias
        </h1>

        <div className="flex justify-center">
          <ReactPlayer
            url={"https://youtu.be/z9CsFqeleUo"}
            width={windowSize}
            height={windowSize}
            controls={true}
          />
        </div>

        <div className="grid justify-items-center gap-x-10 md:grid-cols-2">
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/BZCgpqnTqZw"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/eGORT3A48l0"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/c1XGvy-ynZs"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/NmL3jxP9BB0"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/4G_j_Qk7Gvc"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/wXHrOaaJZoM"
              width={320}
              height={320}
              controls={true}
            />
          </div>
        </div>
        <div className="grid justify-items-center gap-x-10 md:grid-cols-2">
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/E_Vtjlfbke4"
              width={320}
              height={320}
              controls={true}
            />
          </div>

          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/TFc8I4yWV6o"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/CQgBjXeLclM"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/QT1GhuH5WBI"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/_dj_e5Y2XEc"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/PtyxK0vTrPs"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/COftyA8rQUA"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/z6Ot5syx6n0"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url="https://youtu.be/kEHTwr5Gyc8n0"
              width={320}
              height={320}
              controls={true}
            />
          </div>
          <div className="my-10">
            <ReactPlayer
              url=" https://youtu.be/gQuyYgoGIA8"
              width={320}
              height={320}
              controls={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Closed;
