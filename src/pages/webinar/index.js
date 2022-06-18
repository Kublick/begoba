import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useRef } from "react";
import CounterWebinar from "../../components/CounterWebinar";
import Footer from "../../components/Footer";
import FormularioWebinar from "../../components/FormularioWebinar";

const IndexPage = () => {
  const ref = useRef();

  const handleClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="font-webinar">
      <section className=" py-12 container mx-auto md:bg-gradient-to-r from-secondary via-white to-white md:grid md:grid-cols-2 ">
        <StaticImage
          src="../../images/webinar-berenice.webp"
          alt="Webinar"
          className="w-1/2 md:w-full"
        />
        <div className="flex flex-col items-center m-4" ref={ref}>
          <h1 className="text-xl md:text-2xl text-secondary">
            Webinar <span className="text-black">Gratuito</span> Online
          </h1>
          <h2 className="text-2xl text-black md:text-5xl md:py-4 text-center">
            Los 3 Secretos Para Vender Tu Consulta Con Éxito Online En Internet
          </h2>
          <FormularioWebinar />
          <p className="text-xs">Da click en el botón para registrarte</p>
        </div>
      </section>
      <section className="my-4 bg-secondary text-white py-8">
        <div className="container mx-auto ">
          <div className="grid md:grid-cols-2 mx-12 md:mx-4 gap-4 place-items-start sm:place-items-center">
            <div className="flex gap-4 justify-center items-center">
              <StaticImage
                src="../../images/boleto.webp"
                alt="Boleto"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3>Reserva tu Lugar</h3>
                <p>29 de Junio</p>
              </div>
            </div>
            <div>
              <div className="flex gap-4 justify-center items-center">
                <StaticImage
                  src="../../images/anfritrion_small.webp"
                  alt="anfritrion"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3>Psicóloga Berenice Bastidas</h3>
                  <p>Anfritrión del taller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-8">
        <div className="mx-4">
          <h3 className="text-2xl md:text-5xl text-center">
            Lo Que Aprenderás En Este Exclusivo Evento
          </h3>
        </div>
        <div className="grid md:grid-cols-3 mx-12 md:gap-16 lg:mx-24 md:my-12">
          <div className="m-4">
            <h4 className="text-xl font-semibold">Secreto #1</h4>
            <div className="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
            <p>
              La razón de por que cualquier persona puede conseguir pacientes en
              internet
            </p>
          </div>
          <div className="m-4">
            <h4 className="text-xl font-semibold">Secreto #2</h4>
            <div className="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
            <p>
              Por que el boca a boca para conseguir pacientes, ya no funciona en
              la era digital
            </p>
          </div>
          <div className="m-4">
            <h4 className="text-xl font-semibold">Secreto #3</h4>
            <div className="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
            <p>
              La formula triplé y por que es la única que necesitas para ganarte
              la vida con tu profesión
            </p>
          </div>
        </div>
      </section>
      <section className="my-4 bg-secondary text-white md:mx-auto py-8 text-center px-4">
        <div className="container mx-auto ">
          <h3 className="text-2xl md:text-4xl">
            TENEMOS LUGARES LIMITADOS A ESTE WEBINAR
          </h3>
        </div>

        <div className="flex justify-center pt-4" />
      </section>
      <section className="container my-4 mx-auto">
        <div className="grid md:grid-cols-3 items-center">
          <div className="md:col-span-2 mx-8">
            <h2 className="text-2xl md:text-3xl">
              Acerca de Berenice Bastidas
            </h2>
            <div className="bg-gradient-to-r from-secondary  to-white h-6 my-2" />
            <p>
              Psicóloga de profesión desde hace 15 años y en los últimos años me
              he dedicado ayudar a Psicólogos, Nutriologos y Profesionales de la
              Salud a que multipliquen sus ingresos incrementando su número de
              pacientes con estragia a través de internet incluso empezando
              desde cero
            </p>
          </div>

          <div className="flex justify-center my-4 md:my-0 ">
            <StaticImage
              src="../../images/berenice_portrait.webp"
              alt="Berenice Bastidas"
              className=""
            />
          </div>
        </div>
      </section>

      <section className="my-4 bg-secondary text-white ">
        <div className="container md:mx-auto py-8 text-center px-4">
          <h3 className="text-md md:text-lg">
            ¿Eres Psicólogo, Nutriologo, Terapeuta, Profesional de la Salud,
            Dentista o Coach?
          </h3>
          <h2 className="text-xl md:text-2xl">
            APROVECHA ESTA OPORTUNIDAD, SI NO ES AHORA CUANDO..
          </h2>
          <p className="text-sm sm:text-base">
            ¡Este Webinar Gratuito Si Es Para Ti
          </p>
        </div>
      </section>

      <section className="container mx-auto pb-8">
        <h2 className="text-2xl text-black md:text-4xl md:py-4 md:mx-12 mx-4 text-center ">
          Los 3 Secretos Para Vender Tu Consulta Con Éxito Online En Internet
        </h2>

        <div className="flex flex-col items-center justify-center flex-1">
          <button
            className="bg-secondary py-4 px-8 text-white sm:text-lg rounded-full m-4 wiggle hover:animate-none"
            onClick={handleClick}
          >
            RESERVAR MI LUGAR AHORA
          </button>
          <p className="text-xs">Da click en el botón para registrarte</p>
          <p className="text-sm sm:text-base">
            Tu oportunidad de registro expira cuando el reloj se detenga
          </p>

          <CounterWebinar />

          <StaticImage
            src="../../images/LogoIncrementaColor.svg"
            alt="Logo Incrementa"
            className=""
          />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default IndexPage;
