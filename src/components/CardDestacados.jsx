import { Carousel, Container, Row, Col } from "react-bootstrap";
import CardRecetas from "./CardRecetas";

const CardDestacados = () => {
  return (
    <Container>
      <h4 className="text-center textoVerde" id="destacados">
        Los mejores comidas
      </h4>
      <h4 className="text-light text-center display-6 fw-bold">Destacados</h4>
      <section className="my-5">
        <article className="destacados">
          <Row>
            <Carousel>
              <Carousel.Item>
                <Col xs={12} lg={12}>
                  <div className="d-flex d-inline justify-content-evenly">
                    <CardRecetas></CardRecetas>
                  </div>
                </Col>
              </Carousel.Item>
            </Carousel>
          </Row>
        </article>
      </section>
    </Container>
  );
};

export default CardDestacados;
