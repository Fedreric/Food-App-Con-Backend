import { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearReceta, editarReceta, obtenerReceta } from "./helpers/helpers";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const FormularioReceta = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm();
  const [formu, setFormu] = useState(false);
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (id) {
      obtenerReceta(id).then((receta) => {
        setValue("nombreReceta", receta.nombreReceta);
        setValue("imagen", receta.imagen);
        setValue("ingredientes", receta.ingredientes);
        setValue("pasos", receta.pasos);
        setValue("destacado", receta.destacado);
      });
      setFormu(true);
    } else {
      setFormu(false);
    }
  }, []);

  const onSubmit = (receta) => {
    if (!id) {
      crearReceta(receta).then((respuesta) => {
        if (respuesta.status === 201) {
          {
            Swal.fire(
              "Receta Creada",
              `La receta ${receta.nombreReceta} fue creada`,
              "success"
            );
            reset();
          }
        } else {
          Swal.fire(
            "Se produjo un error",
            `Intente realizar esta operacion mas tarde`,
            "error"
          );
        }
      });
    } else {
      editarReceta(receta, id).then((respuesta) => {
        if (respuesta && respuesta.status === 200) {
          Swal.fire(
            "Producto actualizado!",
            `El producto: ${receta.nombreReceta} fue editado.`,
            "success"
          );
          navegacion("/administrador");
        } else {
          Swal.fire(
            "Error!",
            `El producto: ${receta.nombreReceta} no pudo ser actualizado. Intente mas tarde`,
            "error"
          );
        }
      });
    }
  };
  return (
    <Container className="text-light my-5 mainPage">
      {formu ? (
        <h1 className="display-4 text-center">Editar Receta</h1>
      ) : (
        <h1 className="display-4 text-center">Crear Receta</h1>
      )}

      <hr></hr>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formProducto">
          <Form.Label>Receta*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Milanesa con Pure"
            {...register("nombreReceta", {
              required:
                "El nombre de la receta es obligatorio y debe comenzar con mayúscula",
              minLength: {
                value: 2,
                message:
                  "El nombre de la receta  debe contener como mínimo 2 carácteres",
              },
              maxLength: {
                value: 45,
                message:
                  "El nombre de la receta  debe contener como máximo 45 carácteres",
              },
              pattern: {
                value: /^[A-ZÁ-Ü][A-Za-zá-üÁ-Ü\s]{1,44}$/,
                message:
                  "El nombre de la receta  solo puede contener letras y debe comenzar con mayúscula",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreReceta?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://img-global.cpcdn.com/recipes/4ceea74e946533eb/400x400cq70/photo.jpg"
            {...register("imagen", {
              required:
                "La URL de la Imagen es obligatoria y debe terminar con .jpg/.png/.svg",
              pattern: {
                value: /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|png|svg|jpeg|webp)$/,
                message: "La URL de la Imagen debe terminar con .jpg/.png/.svg",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.imagen?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formIngredientes">
          <Form.Label>Ingredientes*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ej. Ingredientes: 1kg de Carne (Nalga, Bola de Lomo)"
            rows={4}
            {...register("ingredientes", {
              required: "Los Ingredientes de la receta son obligatorios",
              minLength: {
                value: 5,
                message:
                  "Los ingredientes de la receta deben contener como mínimo 5 carácteres",
              },
              maxLength: {
                value: 1000,
                message:
                  "Los ingredientes de la receta deben contener como máximo 1000 carácteres",
              },
              pattern: {
                value: /[A-ZÁ-Ü][a-z0-9:,.()á-üÁ-Ü\s]{4,999}$/,
                message:
                  'Los ingredientes de la receta deben comenzar con la primera letra mayúscula además solo pueden contener letras, numeros y signos de puntuación (",",".",":") y parentesis de ser necesario',
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">
            {errors.ingredientes?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPasos">
          <Form.Label>Pasos*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ej. Paso 1: Cortar una cebolla"
            rows={4}
            {...register("pasos", {
              required: "Los pasos a seguir de la receta son obligatorios",
              minLength: {
                value: 5,
                message:
                  "Los pasos a seguir de la receta deben contener como mínimo 5 carácteres",
              },
              maxLength: {
                value: 3000,
                message:
                  "Los pasos a seguir de la receta deben contener como máximo 3000 carácteres",
              },
            })}
          ></Form.Control>
          <Form.Text className="text-danger">{errors.pasos?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formDestacado">
          <Form.Label>Destacado*</Form.Label>
          <Form.Select
            aria-label="Categoria"
            {...register("destacado", { required: "Debe elegir una opcion" })}
          >
            <option value="">Seleccione si la receta es destacada</option>
            <option value="Si">Si</option>
            <option value="No">No</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.destacado?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
  );
};

export default FormularioReceta;
