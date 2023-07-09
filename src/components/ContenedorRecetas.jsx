import CardRecetas from "./CardRecetas";

const ContenedorRecetas = () => {
  return (
    <article className="container">
      <h4 className="text-center textoVerde" id="recetasMain">Saborizate</h4>
      <h4 className="text-light text-center display-6 fw-bold">
        Recetas irresistibles
      </h4>
      <div className="contenedor-recetas d-flex flex-wrap justify-content-center justify-content-md-between mt-3">
        <CardRecetas />
      </div>
    </article>
  );
};

export default ContenedorRecetas;
