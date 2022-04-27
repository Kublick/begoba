import React from "react";
import {
  fbwhite,
  notebookWhite,
  telegramIcon,
} from "../components/helpers/logos";
import SesionHeader from "../components/SesionHeader";
import Videoplayer from "../components/Videoplayer";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CommentsFacebook from "../components/CommentsFacebook";
import ReactPlayer from "react-player";

const S1 = () => {
  let show = true;
  // React.UseEffect(() => {
  //   navigate("/");
  // }, []);

  if (typeof window !== "undefined") {
    if (window.fbq != null) {
      // window.fbq("track", "PageView");
      window.fbq("track", "AddToWhislist");
    }
  }

  const videoUrl = "https://youtu.be/QtKCnfgs48k";
  const manual =
    "https://incrementafiles.s3.us-west-1.amazonaws.com/Manual-TallerInternacional.pdf";
  const eventDate = "25 May 2022 15:30";
  const telegramUrl = "https://t.me/+axdk9ItfKLgzMTZh";

  return (
    <>
      {show ? (
        <div>
          <header>
            <SesionHeader color="bg-mango" date={eventDate} />
          </header>
          <main>
            <div className="grid lg:grid-cols-4">
              <div className="order-last flex flex-col gap-2 p-2 md:order-none lg:gap-6 lg:p-10">
                <div className="rounded-lg bg-secondary p-8 shadow-lg">
                  <div className="flex items-center ">
                    <h2 className="text-3xl font-bold text-white">TIP</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-6 w-6 font-bold"
                      viewBox="0 0 24 24"
                      stroke="#fff"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 17l-4 4m0 0l-4-4m4 4V3"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="block font-semibold text-white">
                      ¿No pudiste tomar nota o tienes dudas?
                    </p>
                    <p className="text-white">¡No te preocupes!</p>
                    <p className="text-white">
                      Vuelve a ver el video y revisa tu Cuaderno de Trabajo del
                      Taller.
                    </p>
                    <p className="text-white">
                      También puedes acceder al grupo de facebook y whatsapp
                    </p>
                  </div>
                </div>

                <div className="mx-2 flex flex-col items-center gap-4">
                  <button
                    className="btn-social bg-secondary"
                    onClick={() => window.open(manual)}
                  >
                    {notebookWhite} Cuaderno de Trabajo
                  </button>

                  <button
                    className="btn-social bg-telegram"
                    onClick={() => window.open(telegramUrl)}
                  >
                    {telegramIcon} Grupo en Telegram
                  </button>
                  <button
                    className=" btn-social bg-primary"
                    onClick={() =>
                      window.open(
                        "http://www.facebook.com/groups/tallerinternacional/"
                      )
                    }
                  >
                    {fbwhite} No te lo pierdas
                  </button>
                </div>
              </div>

              <div className="order-first bg-gray-100 py-8 shadow-lg lg:order-none lg:col-span-2">
                <div className="flex flex-col gap-2 md:gap-6">
                  <h1 className="self-center text-center text-2xl font-semibold text-secondary md:w-3/4">
                    Tu oportunidad de tener pacientes desde las redes sociales
                  </h1>
                  <div>
                    <Videoplayer url={videoUrl} />
                  </div>

                  <p className="self-center font-semibold ">
                    <span className="font-bold text-secondary">CLASE:</span> 1
                    DE 4
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="">
                  <Link to="/s2">
                    <StaticImage
                      src="../images/Miniaturas 640px-02.png"
                      className=""
                      alt="foto sesion 2"
                    />
                  </Link>
                </div>
                <div className="">
                  <Link to="/s3">
                    <StaticImage
                      src="../images/Miniaturas 640px-03.png"
                      className="rounded-md shadow-lg"
                      alt="foto sesion 3"
                    />
                  </Link>
                </div>
                <div>
                  <Link to="/s4">
                    <StaticImage
                      src="../images/Miniaturas 640px-04.png"
                      className="rounded-md shadow-lg"
                      alt="foto sesion 4"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </main>
          <div className="mx-2 grid gap-6 bg-gray-50 pt-8 md:grid-cols-2">
            <div>
              <CommentsFacebook />
            </div>

            <div className="flex flex-col items-center gap-4 p-4">
              <h1 className="mb-4 text-2xl font-bold text-secondary">
                Testimonios
              </h1>
              <ReactPlayer
                url="https://youtu.be/iGA3w0YVac8"
                width={320}
                height={320}
                controls={true}
              />

              <ReactPlayer
                url="https://youtu.be/c1XGvy-ynZs"
                width={320}
                height={320}
                controls={true}
              />

              <ReactPlayer
                url="https://youtu.be/NmL3jxP9BB0"
                width={320}
                height={320}
                controls={true}
              />
              <ReactPlayer
                url="https://youtu.be/6_MBqp7E3Zw"
                width={320}
                height={320}
                controls={true}
              />

              <ReactPlayer
                url="https://youtu.be/gpXgrVIJrms"
                width={320}
                height={320}
                controls={true}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default S1;
