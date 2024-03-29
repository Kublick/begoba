import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Counter from "../components/Counter";
import {
  headerLogoBig,
  wswhite,
  bullet,
  regalo,
  Fblogo,
  Ytlogo,
  Instalogo,
  incrementaLogo,
} from "../components/helpers/logos";
import { StaticImage } from "gatsby-plugin-image";
import { useWindowSize } from "../components/helpers/useWindowSize";
import PropTypes from "prop-types";

const Venta = ({ saleEndDate }) => {
  const [windowSize, setWindowSize] = useState("640");
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 720) {
      setWindowSize(320);
    } else if (size.width > 721) {
      setWindowSize(640);
    }
  }, [size]);

  const pagoFlexible = () => {
    window.open("https://pay.hotmart.com/W42168207B?off=5kj23v80");
  };

  const pagoUnico = () => {
    window.open("https://pay.hotmart.com/W42168207B?off=vjph7fq8");
  };

  return (
    <>
      <div className="flex flex-col items-center gap-4 mb-10">
        <h1 className="text-xl font-semibold text-center text-primary md:text-3xl">
          Bonos de Acción Rápida (bonos BAR solo disponibles{" "}
          <span className="font-bold">HOY</span> )
        </h1>
        <div className="flex items-center justify-center w-3/4 gap-2">
          <div className="hidden sm:inline-block">{regalo}</div>
          <div>
            <p className="text-lg">
              <span className="font-bold">
                BONO - ACCESO A 3 MENTORIAS INDIVIDUALES
              </span>{" "}
              uno a uno con la psicóloga Berenice Bastidas durante el
              entrenamiento, donde podrás recibir ayuda personalizada y enfocada
              únicamente en tu proyecto profesional.
            </p>
            <p>
              <span className="font-semibold text-primary">
                {" "}
                Valorado en $300 dólares{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-3/4 gap-2">
          <div className="hidden sm:inline-block">{regalo}</div>
          <div>
            <p className="text-lg">
              <span className="font-bold">
                BONO - SISTEMA PARA QUE TUS PACIENTES NO ABANDONEN LA CONSULTA
              </span>{" "}
              ¡Este bono esta increíble! Si a ti te sucede que el paciente
              empieza su tratamiento de consultas y no lo termina, que abandona
              el tratamiento, sin duda si necesitas tener este bono, este
              sistema para que eso ya no te suceda.
            </p>
            <p>
              <span className="font-semibold text-primary">
                {" "}
                Valorado en $297 dólares{" "}
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-3/4 gap-2">
          <div className="hidden sm:inline-block">{regalo}</div>
          <div>
            <p className="text-lg">
              <span className="font-bold">BONO - METODOS DE PAGO ONLINE</span>{" "}
              Aprenderás la metodología para recibir pagos por tus servicios de
              consulta desde diferentes países del mundo, con esto logras poder
              tener pacientes para tu consulta en línea desde diferentes países.
            </p>
            <p>
              <span className="font-semibold text-primary">
                Valorado en $197 dólares{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-3/4 gap-2">
          <div className="hidden sm:inline-block">{regalo}</div>
          <div>
            <p className="text-lg">
              <span className="font-bold">
                BONO - LA LLAVE FACEBOOK E INSTAGRAM ADS
              </span>{" "}
              con este bono conseguirás crear anuncios potentes que
              verdaderamente atraigan pacientes a tu consulta, lograras aprender
              como configurar la publicidad en Instagram y Facebook y te
              ahorraras los miles de dólares que te cobraría una agencia de
              marketng por hacerte esto, por que lo sabrás hacer tu mismo.
            </p>
            <p>
              <span className="font-semibold text-primary">
                Valorado en $500 dólares{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-4 bg-secondary ">
        <h1 className="px-4 text-2xl font-bold text-center text-white md:w-1/2 lg:px-0 lg:text-5xl">
          ELIGE EL PLAN QUE MEJOR SE ADAPTE A TÍ
        </h1>
      </div>
      <div className="md:mx-10">
        <div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-20">
          <div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
            <h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
              PAGO ÚNICO
            </h2>
            <p className="py-4 text-lg text-center md:text-xl">
              Ahorra $85 dólares
            </p>
            <p className="py-4 text-lg text-center md:text-xl">Pago Único</p>
            <h2 className="text-2xl font-bold text-center md:text-3xl">
              $497 dólares
            </h2>
            <button
              className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
              onClick={pagoUnico}
            >
              Seleccionar
            </button>
          </div>
          <div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
            <h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
              PLAN FLEXIBLE
            </h2>
            <p className="py-4 text-lg text-center md:text-xl">
              Paga a tu ritmo
            </p>
            <p className="py-4 text-lg text-center md:text-xl">
              6 pagos mensuales de
            </p>
            <h2 className="text-2xl font-bold text-center md:text-3xl">
              $97 dólares
            </h2>

            <button
              className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
              onClick={pagoFlexible}
            >
              Seleccionar
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <StaticImage
          src="../images/garantia.png"
          className="transform scale-75"
          alt="sello garantia"
        />
        <p className="px-8 text-center md:w-3/4 md:px-0 md:text-2xl">
          Si tienes alguna pregunta referente al entrenamiento puedes enviar un
          mensaje directamente aquí en el botón de WhatsApp aclaramos todas tus
          dudas.
        </p>
        <div className="gap-8 mb-8 md:flex md:items-center">
          <button
            className="flex items-center h-12 gap-4 px-8 my-10 text-xl font-semibold text-white bg-green-600 rounded-lg"
            onClick={() => window.open("https://wa.me/message/LD54V7JCH3TXD1")}
          >
            <span className="transform scale-150">{wswhite}</span> Quiero saber
            más información
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-primary">
        <div className="w-1/2">
          <h2 className="my-10 text-2xl text-center text-white md:text-5xl">
            Triplicó su retorno de inversión antes de concluir el entrenamiento
          </h2>
        </div>
        <h2 className="mb-10 text-4xl text-white font-cursive">
          Video Testimonial
        </h2>
        <div>
          <ReactPlayer
            url={"https://youtu.be/z9CsFqeleUo"}
            width={windowSize}
            height={windowSize}
            controls={true}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="my-10 text-2xl text-center md:w-1/2 md:text-5xl">
          Todo esto es lo que recibes al momento de inscribirte al entrenamiento
          online incrementa tu consulta
        </h2>
      </div>
      <div className="flex justify-center px-4">
        <StaticImage
          src="../images/03beneficios.png"
          className=""
          alt="beneficios"
        />
      </div>
      <div className="px-10 py-10 my-10 bg-mango-light">
        <div className="flex justify-center mb-10">{headerLogoBig}</div>
        <div className="flex justify-center">
          <div className="w-3/4 border-b-2 border-secondary"></div>
        </div>
        <h1 className="pt-4 text-lg text-center md:text-2xl">
          El entrenamiento{" "}
          <span className="text-primary text-font-bold">
            INCREMENTA TU CONSULTA
          </span>{" "}
          incluye:
        </h1>
        <div className="grid gap-6 my-10 md:grid-cols-2">
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                PROGRAMA INTENSIVO DE 12 SEMANAS 100% ONLINE
              </span>{" "}
              donde aprenderás como lograr que los pacientes lleguen a ti con la
              estrategia del entrenamiento y logres incrementar tu numero de
              pacientes y multiplicar tus ingresos de consultas.{" "}
              <span>
                <br /> Valorado en{" "}
                <span className="font-semibold text-primary">$997 dólares</span>
              </span>
            </p>
          </div>

          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                12 MENTORIAS GRUPALES EN VIVO ONLINE
              </span>{" "}
              con la psicóloga Berenice Bastidas para obtener seguimiento,
              responder preguntas, aclarar dudas, obtener feedback de tus
              avances y ayudarte a lograr alcanzar tu meta.
              <span>
                <br />
                <span className="font-semibold text-primary">
                  Valorado en $697 dólares
                </span>
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                8 MODULOS DE TRABAJO CON LECCIONES DE VIDEO EN HD
              </span>{" "}
              donde siguiendo la estrategia de Incrementa Tu Consulta avanzarás
              paso a paso de forma ordenada, enfocada, pero sobre todo a tu
              ritmo por que tu eliges tus propios horarios para ver las
              lecciones que ya témenos pregrabadas y lo puedes hacer desde tu
              computadora o desde tu celular.
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                PLAN DE ESTUDIOS EN PDF
              </span>{" "}
              para que sepas exactamente en dónde debes de enfocarte cada
              semana, para así lograr avanzar a pasos seguros y que así ya nada
              te detenga triunfar
              <span>
                <br /> Valorado en{" "}
                <span className="font-semibold text-primary">$47 dólares</span>
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                ACCESO POR TODO UN AÑO A LA PLATAFORMA
              </span>{" "}
              para que así puedas ver y repetir las lecciones luego de concluir
              el programa las veces que tu preﬁeras.
              <span>
                <br /> Valorado en{" "}
                <span className="font-semibold text-primary">$497 dólares</span>
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                METAS SEMANALES DE TRABAJO
              </span>{" "}
              que aceleraran tus resultados para que nada quede en teoría, cada
              lección te lleva a la acción con ejercicios detallados, de esta
              manera a medida que avanzas en el programa, también avanzas en tu
              negocio.
              <span>
                <br />
                {/* <span className="font-semibold text-primary">
                  Valorado en $697 dólares
                </span> */}
              </span>
            </p>
          </div>
          <div className="flex gap-2">
            <div className="w-6">{bullet}</div>
            <p>
              <span className="text-lg font-semibold text-primary">
                MEMEBRESIA PARA PERTENECER DURANTE TODO UN AÑO A LA COMUNIDAD
                INTERNACIONAL
              </span>{" "}
              de alumnos profesionales del entrenamiento incrementa tu consulta,
              el pertenecer a la comunidad es algo invaluable, ahí podrás hacer
              relaciones internacionales, donde conocerás profesionales
              increíbles con los que podrás hacer tus futuras colaboraciones,
              además dentro de ella podrás ir compartiendo los avances que vayas
              logrando con tus compañeros, y empiezas a sentir el empuje de ser
              parte de una tribu que creme no te va a dejar sola.
              <span>
                <br /> Valorado en{" "}
                <span className="font-semibold text-primary">Invaluable</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-center">
          <h2 className="w-3/4 text-center mt-10text-2xl md:text-3xl lg:text-5xl">
            ¡Si accedes hoy además hay regalos para ti!
          </h2>
          <h2 className="w-3/4 mt-4 mb-10 text-2xl text-center md:text-3xl lg:text-5xl">
            obtienes de forma 100% GRATUITA 5 Bonos de regalo
          </h2>
          <h2 className="flex p-4 text-2xl font-bold text-white rounded-lg bg-primary">
            Bonos de Regalo
          </h2>
          <div className="flex flex-col w-3/4 gap-4 py-10 md:mx-0 md:w-1/2">
            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 1: HABLA FRENTE A LA CAMARA CON SEGURIDAD
                </p>
                <p>
                  Perderás el miedo y la vergüenza al hacer video, te sentirás
                  en confianza total al hablar en redes sociales.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $247 dólares{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 2: TU E-BOOK
                </p>
                <p>
                  Este bono te servirá para aprender a crear y diseñar tu propio
                  libro digital el cual te generará dinero de forma automática y
                  recurrente.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $97 dólares
                  </span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 3: CREA Y VENDE TU PROPIO CURSO ONLINE
                </p>
                <p>
                  Aprenderás la metodología para recibir pagos por tus servicios
                  de consulta desde diferentes países del mundo.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $600 dólares
                  </span>
                </p>
              </div>
            </div>

            {/* <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 1: METODOS DE PAGO ONLINE
                </p>
                <p>
                  Aprenderás la metodología para recibir pagos por tus servicios
                  de consulta desde diferentes países del mundo, con esto logras
                  poder tener pacientes para tu consulta en línea desde
                  diferentes países.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $197 dólares{" "}
                  </span>
                </p>
              </div>
            </div> */}

            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 4: CREACION DE CONTENIDOS
                </p>
                <p>
                  Perderás el miedo y la vergüenza de hablar en redes sociales.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $297 dólares
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:inline-block">{regalo}</div>
              <div>
                <p className="text-lg font-semibold text-secondary">
                  BONO 5: CATALOGO HERRAMIENTAS DIGITALES
                </p>
                <p>
                  Para que no tengas que pasar horas buscando herramientas
                  buenas, este manual en lista las mejores herramientas
                  digitales y plataformas con las que podrás trabajar y muchas
                  de ellas en su versión gratuita.
                </p>
                <p>
                  <span className="font-semibold text-primary">
                    Bono Valorado en $ 47 dólares
                  </span>
                </p>
              </div>
            </div>
            <p>
              Sin duda es muchísimo valor el que tendrás con el entrenamiento
              completo{" "}
              <span className="font-semibold text-primary">
                INCREMENTA TU CONSULTA
              </span>{" "}
              y además con los bonos de regalo tienes acceso a mas de{" "}
              <span className="font-semibold text-secondary">$4,500</span>{" "}
              dólares en contenido de valor y recursos. Si pagaras todo esto por
              separado te saldría en eso... Pero hoy tengo una invitación, es
              una oferta especial para ti, hoy tu puedes reservar tu inscripción
              al entrenamiento con un primer pago de{" "}
              <span className="font-semibold text-secondary">$97 dólares</span>{" "}
              y luego{" "}
              <span className="font-semibold text-primary">5 pagos</span> mas de{" "}
              <span className="font-semibold text-secondary">$97 dólares…</span>{" "}
              O si lo prefieres puedes ahorrarte{" "}
              <span className="font-semibold text-primary">$85 dólares</span>{" "}
              haciendo un pago único de{" "}
              <span className="font-semibold text-secondary">$497 dólares</span>{" "}
              el tipo de cambio y el IVA dependerá de cada país.
            </p>
            <p>
              Además tienes{" "}
              <span className="font-semibold text-primary">
                15 días de GARANTIA
              </span>{" "}
              podrás empezar la formación conocer a todos tus compañeros empezar
              a formarte y si no te gusta lo que vez, si sientes que no es lo
              tuyo te devuelvo el 100% del importe pagado.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center py-4 mt-10 mb-5 bg-mango ">
          <h2 className="px-4 text-2xl font-bold text-center text-white md:w-3/4 lg:px-0 lg:text-4xl">
            ¿Listo para crear la vida que sueñas?
          </h2>
          <h2 className="p-4 text-xl font-semibold text-center">
            ELIGE EL PLAN QUE MEJOR SE ADAPTE A TÍ
          </h2>
        </div>
        <div className="md:mx-10">
          <div className="flex flex-col items-center justify-center gap-8 py-10 md:flex-row md:gap-20">
            <div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
              <h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
                PAGO ÚNICO
              </h2>
              <p className="py-4 text-lg text-center md:text-xl">
                Ahorra $85 dólares
              </p>
              <p className="py-4 text-lg text-center md:text-xl">Pago Único</p>
              <h2 className="text-2xl font-bold text-center md:text-3xl">
                $497 dólares
              </h2>
              <button
                className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
                onClick={pagoUnico}
              >
                Seleccionar
              </button>
            </div>
            <div className="flex flex-col w-3/4 p-4 bg-white border-2 border-red-600 border-dashed md:w-1/2 lg:max-w-md">
              <h2 className="p-4 text-xl font-bold text-center text-white bg-mango md:text-2xl">
                PLAN FLEXIBLE
              </h2>
              <p className="py-4 text-lg text-center md:text-xl">
                Paga a tu ritmo
              </p>
              <p className="py-4 text-lg text-center md:text-xl">
                6 pagos mensuales de
              </p>
              <h2 className="text-2xl font-bold text-center md:text-3xl">
                $97 dólares
              </h2>

              <button
                className="p-4 my-4 text-xl font-bold text-white uppercase rounded-lg bg-primary hover:bg-primary-dark"
                onClick={pagoFlexible}
              >
                Seleccionar
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <StaticImage
            src="../images/garantia.png"
            className="transform scale-75"
            alt="sello garantia"
          />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="w-3/4 px-4 text-xl font-semibold text-center md:w-1/2 md:text-3xl">
            Entrenamiento{" "}
            <span className="font-semibold text-primary">INCREMENTA</span>{" "}
            <span className="font-semibold text-secondary">TU CONSULTA</span>{" "}
            cierra las inscripciones en:
          </h2>
          <div className="py-5">
            <Counter date={saleEndDate} />
          </div>
          <p className="w-3/4 px-8 text-center md:w-3/4 md:px-0 md:text-2xl">
            Si tienes alguna pregunta referente al entrenamiento puedes enviar
            un mensaje directamente aquí en el botón de WhatsApp aclaramos todas
            tus dudas.
          </p>

          <button
            className="flex items-center gap-4 px-8 py-4 my-10 text-xl font-semibold text-white bg-green-600 rounded-lg"
            onClick={() => window.open("https://wa.me/message/LD54V7JCH3TXD1")}
          >
            <span className="transform scale-150">{wswhite}</span> Quiero saber
            más información
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 bg-primary">
        <div className="flex justify-center px-10 ">
          <h2 className="text-lg text-center text-white lg:px-0 lg:text-2xl">
            Mira las historias inspiradoras, los casos de éxito que ya tomaron
            acción.
          </h2>
        </div>
        <h2 className="my-4 text-3xl font-cursive text-mango">
          ¿Serás el próximo?
        </h2>
        <div className="grid gap-x-10 md:grid-cols-2">
          <div className="flex justify-center">
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
      </div>
      <div className="flex flex-col">
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
        </div>
        <div>
          <div className="flex justify-center">
            <StaticImage
              src="../images/03beneficios.png"
              className=""
              alt="beneficios"
            />
          </div>
        </div>
        <div className="grid gap-2 lg:grid-cols-3">
          <div className="flex items-center justify-center">
            {incrementaLogo}
          </div>

          <div>
            <p className="mx-2 text-center footer-text">
              Legal Terms - Acerca de las politicas de privacidad y uso de
              cookies Incrementa tu consulta Derechos reservados 2021
              https://incrementatuconsulta.com Psicologa Berenice Bastidas
              Mexicali Baja California, México Whatsapp: + 52 (686) 234-9366
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Fblogo data="#000" />
            <Ytlogo data="#000" />
            <Instalogo data="#000" />
          </div>
        </div>
        <div className="px-10 py-4">
          <p className="text-black text-mini">
            Este sitio no forma parte del sitio de Facebook o Facebook Inc.
            Además, este sitio NO está respaldado por Facebook de ninguna
            manera. FACEBOOK es una marca registrada de FACEBOOK, Inc. Cuando se
            registre para este taller gratuito, ocasionalmente recibirá correos
            electrónicos gratuitos, consejos útiles, videos y actualizaciones
            para hacer crecer tu lista de pacientes y temas relacionados.
            Estamos compartiendo lo que hemos aprendido de nuestras experiencias
            y la de nuestros estudiantes del entrenamiento incrementa tu
            consulta y esta información no es garantía de ganancias o
            resultados. Si desea dejar de recibir nuestros correos electrónicos,
            puede darse de baja en cualquier momento que así lo desee,
            utilizando el enlace para des suscribirse que aparecerá en los
            correos electrónicos.
          </p>
        </div>
      </div>
    </>
  );
};

export default Venta;

Venta.propTypes = {
  saleEndDate: PropTypes.instanceOf(Date),
};
