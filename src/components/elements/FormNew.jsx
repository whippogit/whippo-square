import React from "react";

function FormNew() {
  return (
    <form className="form-control form-control-lg">
      <i class="fa-solid fa-circle-xmark text-danger"></i>
      <i class="fa-solid fa-rotate-right text-warning"></i>
      <div className="mb-5 mt-3">
        <h4>Noticias</h4>
      </div>

      <div className="row">
        <div class="mb-3 col">
          <label for="formTitle" class="form-label">
            Título
          </label>
          <input class="form-control" type="text" id="formTitle" />
        </div>
        <div class="mb-3 col">
          <label for="formCategory" class="form-label">
            Categoría
          </label>
          <input class="form-control" type="text" id="formCategory" />
        </div>
      </div>
      <div className="row">
        <div class="mb-3 col">
          <label for="formDescription" class="form-label">
            Descripción
          </label>
          <textarea
            class="form-control"
            type="text"
            id="formDescription"
          />
        </div>
        <div class="mb-3 col">
          <label for="formContent" class="form-label">
            Contenido
          </label>
          <textarea
            class="form-control"
            type="text"
            id="formContent"
          />
        </div>
      </div>

      <div className="row">
        <div class="mb-3 col">
          <label for="formFile" class="form-label">
            Foto
          </label>
          <input class="form-control" type="file" id="formFile" />
        </div>
        <div class="mb-3 col">
          <label for="formDate" class="form-label">
            Fecha de publicación
          </label>
          <input class="form-control" type="date" id="formDate" />
        </div>
      </div>
      <button className="btn bg-acent text-white rounded-3 mt-4" type="submit">
        Publicar
      </button>
    </form>
  );
}

export default FormNew;
