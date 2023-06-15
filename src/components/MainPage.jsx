import React from "react";
import NavBar from "./elements/NavBar";
import LogoWhippoAzul from "./logos/LogoWhippoAzul";

function MainPage() {
  return (
    <>
      <NavBar />

      <div className="row">
        <div className="col-4">
          <div className="d-flex justify-content-center">
            <LogoWhippoAzul />
          </div>

          <div>
            <h2 className="text-center mt-5">Jhonny Wallker</h2>
            <div className="col-12 d-flex justify-content-center">
              <button
                className="btn bg-acent mt-5 text-white rounded-3"
                type="submit"
              >
                Editar Perfil
              </button>
            </div>
          </div>
        </div>
        <div className="col-6 mt-5">
          <div className="row mt-5">
            <div className="col-10">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar api..."
              />
            </div>
            <div className="col-2">
              <button
                className="btn bg-acent text-white rounded-3"
                type="submit"
              >
                New
              </button>
            </div>
          </div>
          <ul class="list-group list-group-flush">
            <a href="/api" className="list-group-item mt-5 li text-dark">
              Noticias
            </a>
            <a href="/api" className="list-group-item mt-5 li text-dark">
              Leyendas
            </a>
            <a href="/api" className="list-group-item mt-5 li text-dark">
              Historias
            </a>
            <a href="/api" className="list-group-item mt-5 li text-dark">
              Esteros del Iberá
            </a>
          </ul>
        </div>
        <hr className="hr" />
        <div className="ms-5">
          <img
            src="https://res.cloudinary.com/dm4wfkipp/image/upload/v1683838529/github-logo-813485_p9ud3p.png"
            alt="GitHub"
            className="github-logo d-inline me-2"
          />
          <p className="d-inline">© 2023 GitHub, Inc.</p>
        </div>
      </div>
    </>
  );
}

export default MainPage;
