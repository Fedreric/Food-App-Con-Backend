const URL_USUARIO = import.meta.env.VITE_API_USUARIO;
const URL_RECETAS = import.meta.env.VITE_API_RECETAS;

export const login = async (usuario) =>{
  try {
    console.log(usuario);
    const respuesta = await fetch(URL_USUARIO, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      email: datos.email,
      uid: datos.uid
    };
  
  } catch (error) {
    console.log("errores en el login");
    return;
  }
}

export const consultaCrearUsuario = async (usuario) =>{
  try{
      const respuesta = await fetch(URL_USUARIO + '/nuevo',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body: JSON.stringify(usuario)
      });
      return respuesta;
  }catch(e){
      console.log(e); 
  }
}

export const obtenerRecetas = async () => {
  try {
    const respuesta = await fetch(URL_RECETAS);
    const listaRecetas = await respuesta.json();
    return listaRecetas;
  } catch (e) {
    console.log(e);
  }
};
export const obtenerReceta = async (id) => {
  try {
    const respuesta = await fetch(`${URL_RECETAS}/${id}`);
    const receta = await respuesta.json();
    return receta;
  } catch (e) {
    console.log(e);
  }
};
export const crearReceta = async (receta) => {
  try {
    const respuesta = await fetch(URL_RECETAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarReceta = async (receta, id) => {
  try {
    const respuesta = await fetch(URL_RECETAS + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receta),
    });
    return respuesta;
  } catch (e) {
    console.log(e);
  }
};

export const eliminarReceta = async (id) => {
  try {
    const respuesta = await fetch(URL_RECETAS + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (e) {
    console.log(e);
  }
};
