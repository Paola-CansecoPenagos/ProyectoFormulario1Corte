import Formulario from "./Formulario";
import "../assets/style/main.css"

function Main(){

    return (
        <body>
            <form action="" method="POST" id="form">
            <h1>Pedidos</h1>
            <Formulario/>
            <button type="submit">Finalizar pedido</button>
            </form>
        </body>
    );
}

export default Main;