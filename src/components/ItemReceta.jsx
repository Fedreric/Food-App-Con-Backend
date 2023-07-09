import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { eliminarReceta, obtenerRecetas } from "./helpers/helpers";
import Swal from "sweetalert2";

const ItemReceta = ({ receta, setRecetas }) => {
  const borrarReceta = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No se puede volver atrás",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarReceta(receta._id).then((response) => {
          if (response.status === 200) {
            Swal.fire(
              "Producto eliminado!",
              `El producto ${receta.nombreReceta} fue eliminado.`,
              "success"
            );
            obtenerRecetas().then((data) => {
              setRecetas(data);
            });
          } else {
            Swal.fire("error", "Oops...", "Algo salió mal!");
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{receta._id}</td>
      <td>{receta.nombreReceta}</td>
      <td>
        <Link
          className="btn btn-outline-light textoVerde mb-2 mb-md-0"
          to={"/administrador/editar/" + receta._id}
        >
          Editar
        </Link>
        <Button
          className="ms-md-2 fondoVerde text-black"
          variant="outline-light"
          onClick={() => borrarReceta(receta._id)}
        >
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemReceta;
