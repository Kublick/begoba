import { Link } from "gatsby";
import React from "react";
import SEO from "../components/seo";

function NotFoundPage() {
  return (
    <>
      <SEO title="404: Not found" />
      <div className="h-screen bg-slate-100 flex items-center	flex-col justify-center">
        <div className=" ">
          <h2 className="p-3 my-8 text-2xl font-bold  ">
            Esta pagina no existe...
          </h2>
          <div className="flex justify-center">
            <Link to="/" className="p-3 my-8 text-2xl font-bold btn-main ">
              Regresar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
