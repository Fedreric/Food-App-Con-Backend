import { Col, Container, Image, Row, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerReceta } from "./helpers/helpers";

const DetalleReceta = () => {
  const { id } = useParams();
  const [receta, setReceta] = useState({});
  useEffect(() => {
    obtenerReceta(id).then((respuesta) => {
      setReceta(respuesta);
    });
  }, []);
  const arrayIngredientes = receta.ingredientes
    ? receta.ingredientes.split(",")
    : [];
  return (
    <Container className="mainPage justify-content-center my-5">
      <Image
        src={receta.imagen}
        className="w-100 img-detalle-receta"
        rounded
      ></Image>
      <div className="d-flex justify-content-between mt-2 text-light">
        <h4>{receta.nombreReceta}</h4>
        <span>
          <i className="bi bi-clock-history"></i> 40min
        </span>
      </div>
      <section className="my-5">
        <h3 className="text-center text-light mb-3">Ingredientes</h3>
        <ListGroup className="lista-ingredientes">
          {arrayIngredientes.map((ingrediente) => {
            return (
              <ListGroup.Item key={1} className="d-flex justify-content-between mb-1 li-ingrediente">
                {ingrediente}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </section>
      <section className="my-5 text-light">
        <h3 className="text-center text-light mb-3">Instrucciones</h3>
        <Row>
          <Col lg={7}>
            <h4 className="paso-instruccuiones-color">Pasos a seguir: </h4>
            <p className="p-instrucciones">{receta.pasos}</p>
          </Col>
          <Col lg={5} className="d-none d-lg-flex align-self-center">
            <Image
              src="https://media.baamboozle.com/uploads/images/84195/1600403085_260841"
              className="w-100 img-intrucciones"
            ></Image>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default DetalleReceta;
