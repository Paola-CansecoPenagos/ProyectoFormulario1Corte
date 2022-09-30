import "../assets/style/formulario.css";
import InputColor from "../atoms/InputColor";
import InputDate from "../atoms/InputDate";
import InputEmail from "../atoms/InputTel";
import InputNumber from "../atoms/inputNumber";
import InputText from "../atoms/inputText";
import InputTel from "../atoms/inputTel";
import InputTime from "../atoms/InputTime";

function Formulario() {
    const label = [
    { tipo:"text",
        text: "nombre" },
    { tipo:"text",
        text: "Descripcion del producto" },
    { tipo:"email",
        text: "email" },
    { tipo:"tel",
        text: "telefono" },  
    { tipo:"number",
        text: "cantidad de productos" },
    { tipo: "color"},
    { tipo:"date",
        text: "Fecha de entrega" },
    { tipo:"time",
        text: "Hora de entrega" },
    { tipo:"button",
        text: "Finalizar pedido" },
    ];
    return ( 
        label.map((texto)=>(
            <InputText
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputText
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputEmail
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputTel
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputNumber
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputColor
            tipo={texto.tipo}
            />,
            <InputDate
            tipo={texto.tipo}
            text={texto.text}
            />,
            <InputTime
            tipo={texto.tipo}
            text={texto.text}
            />
        ))
    );
}

export default Formulario;
