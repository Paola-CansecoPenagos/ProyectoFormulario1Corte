
function InputText({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="text" required/><span class="barra"></span>
        </>
    );
}

export default InputText;