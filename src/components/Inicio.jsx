import { Container } from "react-bootstrap";
import BannerMain from "./BannerMain";
// import CardDestacados from "./CardDestacados";
import ContenedorRecetas from "./ContenedorRecetas";
const Inicio = () => {
  return (
    <Container className="mainPage">
      <BannerMain></BannerMain>
      {/* <CardDestacados></CardDestacados> */}
      <ContenedorRecetas />
    </Container>
  );
};

export default Inicio;
