import routerx from "express-promise-router";

//Importamos el controladores, que tendra los endpoint
import pruebas from "../controllers/ctr_prueba";

//Hacemos una instancia a la libreria 
const router = routerx();


//En esta parte ira como rutas los endpoint eje('/agregar', '/editar')
router.use("/lista", pruebas.prueba);


//Exportamos el enrutador 
export default router;
