import { Image } from "react-bootstrap";

const BannerMain = () => {
  return (
    <section className="banner text-light text-centermx-0 row align-items-center mb-5">
      <div className="col-md-6 banner-image">
        <Image src="assets/banner.png" className="w-100"></Image>
      </div>
      <div className="col-md-6">
        <h3>Sabores irresistibles</h3>
        <p>
          recetas deliciosas y faciles de aprender, ¡inspirate en nuestra
          cocina!
        </p>
        <a className="w-100 btn-banner p-3 d-inline-block my-5" href="#recetasMain">
          Empeza a cocinar <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default BannerMain;
