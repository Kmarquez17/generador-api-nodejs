 import routerx from "express-promise-router";

// Segunda forma de hacer router
/*  import express  from 'express'
    const router = express.Router();
*/

//Importamos todas las rutas ya definidas de nuestro proyecto
import pruebas from './prueba'

const router = routerx();

//Aqui la url va en la url el nombre de la tabla o modulo ejemplo('/usuario','/productos')
router.use("/prueba",pruebas);

export default router;
