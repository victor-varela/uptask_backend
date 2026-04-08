import server from "./server"; //el export default de server es app. Aca le cambio el nombre porque hace mas sentido
import colors from 'colors'

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(colors.cyan.bold(`REST API corriendo en el puerto ${port}`));
});

/**
 * La lógica de separación es:
    server.ts  →  "qué es y cómo se configura" la app
    index.ts   →  "dónde corre" (puerto y arranque)
 * 
 * 
 * 
 * 
 * 
 */
