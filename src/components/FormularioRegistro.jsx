import BannerLanguajes from "./BannerLanguajes";
import LogoAguara from "./logos/LogoAguara";
import LogoWhippo from "./logos/LogoWhippo";

function FormularioRegistro() {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="d-flex justify-content-center mt-4">
            <LogoWhippo />
          </div>

          <div className="m-3 mt-5">
            <form className="row g-3">
              <div className="col-md-6 mt-5">
                <label for="validationServer01" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control bg-form"
                  autoFocus={true}
                  required
                />
              </div>
              <div className="col-md-6 mt-5">
                <label for="validationServer02" className="form-label">
                  Apellido
                </label>
                <input type="text" className="form-control bg-form" required />
              </div>

              <div className="col-md-12 mt-5">
                <label for="validationServer03" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control bg-form"
                  aria-describedby="validationServer03Feedback"
                  required
                />
              </div>
              <div className="col-md-12 mt-5">
                <label for="validationServer03" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control bg-form"
                  aria-describedby="validationServer03Feedback"
                  required
                />
              </div>

              <div className="d-flex justify-content-center mt-5">
                <h6>
                  <span className="color-letras">
                    ya estás registrado? entrá
                  </span>{" "}
                  <a href="/login">aquí</a>
                </h6>
              </div>
              <div className="col-12 d-flex justify-content-center">
                <button
                  className="btn bg-acent mt-5 text-white rounded-3"
                  type="submit"
                >
                  Registrarse
                </button>
              </div>
            </form>
          </div>

          <div className="d-flex justify-content-center mt-5 mb-3">
            <LogoAguara />
          </div>
        </div>

        <div className="bg-gradiente col-7 d-none d-sm-block">
          <BannerLanguajes />
        </div>
      </div>
    </>
  );
}

export default FormularioRegistro;
