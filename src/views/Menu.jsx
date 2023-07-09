import { Nav, Navbar, Container } from "react-bootstrap";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Swal from "sweetalert2";

const Menu = () => {
  const location = useLocation();
  const usuarioStorage = JSON.parse(sessionStorage.getItem("user")) || null;
  const navegacion = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Vas a cerrar sesion",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cerrar sesion",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem("user");
        navegacion("/");
      }
    });
  };
  return (
    <Navbar className="fondoNegro" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img src="assets/Logo.png" className="Logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={`${
            location.pathname === "/login" ||
            location.pathname === "/administrador"
              ? "flex-lg-grow-0 flex-lg-basis-auto"
              : ""
          }
              justify-content-end`}
        >
          <Nav
            className={`fs-4 mx-auto ${
              location.pathname === "/" ? "d-flex" : "d-none"
            }`}
          >
            <Nav.Link className="text-light" href="#destacados">
              Destacados
            </Nav.Link>
            <Nav.Link className="text-light" href="#recetasMain">
              Recetas
            </Nav.Link>
            <NavLink
              end
              className="text-light nav-item nav-link"
              to={"/contacto"}
            >
              Contacto
            </NavLink>
          </Nav>
          <Nav className="fs-4 ms-lg-1 align-items-lg-center">
            {usuarioStorage ? (
              usuarioStorage.email === "admin@gmail.com" ? (
                <>
                  <NavLink
                    end
                    className="text-light nav-item nav-link fs-6"
                    to={"/administrador"}
                  >
                    Administrador
                  </NavLink>
                  <NavLink
                    end
                    className="text-light nav-item nav-link"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <i className="bi bi-person-dash"></i>
                  </NavLink>
                </>
              ) : (
                <>
                <span className="text-light">Bienvenido!</span>
                  <NavLink
                    end
                    className="text-light nav-item nav-link"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    <i className="bi bi-person-dash"></i>
                  </NavLink>
                </>
              )
            ) : (
              <>
                <NavLink
                  end
                  className="text-light nav-item nav-link"
                  to={"/login"}
                >
                  <i className="bi bi-person"></i>
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
