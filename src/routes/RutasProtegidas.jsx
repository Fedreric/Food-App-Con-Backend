import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
    const usuarioStorage = JSON.parse(sessionStorage.getItem("user")) || null;
    //preguntar si el usuario no esta logueado
    if(usuarioStorage.email !== 'admin@gmail.com')
    {
        return <Navigate to={'/'}></Navigate>
    }else{
        return children
    }
};

export default RutasProtegidas;