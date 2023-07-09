import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { consultaCrearUsuario } from "./helpers/helpers";


const Registro = () => {
  const navegacion = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    consultaCrearUsuario(user).then((respuesta) => {
        if (respuesta.status === 201) {
          Swal.fire("Usuario creado!", `Inicia sesi'on`, "success");
          navegacion("/login");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al crear usuario!",
          });
        }
      });
  };

  return (
    <div className="usuario_contenedor d-flex flex-column justify-content-center">
      <div className="login_contenedor d-flex flex-column justify-content-center align-items-center">
        <h2 className="mt-0">REGISTRO</h2>
        <Form className="form_contenedor" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              id="email"
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                minLength: {
                  value: 5,
                  message: "La cantidad mínima de caracteres es de 5 dígitos",
                },
                maxLength: {
                  value: 100,
                  message: "La cantidad máxima de caracteres es de 100 dígitos",
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "El correo electrónico no es válido",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              id="password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message:
                    "La contraseña debe contener 8 caracteres (al menos 1 letra mayúscula, 1 letra minúscula y 1 número) también puede incluir caracteres especiales",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.password?.message}
            </Form.Text>
          </Form.Group>
          <Button type="submit" className="w-100 mt-1"> 
            Crear cuenta
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registro;