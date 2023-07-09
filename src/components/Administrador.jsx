import { Table, Container } from "react-bootstrap";
import ItemReceta from "./ItemReceta";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerRecetas } from "./helpers/helpers";

const Administrador = () => {
  const [recetas, setRecetas] = useState([]);
  useEffect(() => {
    obtenerRecetas().then((receta) => {
      setRecetas(receta);
    });
  }, []);

  return (
    <Container className="mt-5 mainPage">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 text-center text-light">Recetas</h1>
        <Link
          className="btn btn-outline-success text-dark fondoVerde"
          variant="outline-success"
          to={"/administrador/crear"}
        >
          Agregar
        </Link>
      </div>
      <hr></hr>
      <section className="table-responsive">
        <Table striped bordered hover className="table-dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre de la Receta</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {recetas?.map((receta) => (
              <ItemReceta
                key={receta._id}
                receta={receta}
                setRecetas={setRecetas}
              ></ItemReceta>
            ))}
          </tbody>
        </Table>
      </section>
    </Container>
  );
};

export default Administrador;
