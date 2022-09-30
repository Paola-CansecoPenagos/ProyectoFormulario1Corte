function InputTel({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="tel" required/><span class="barra"></span>
        </>
    );
}

export default InputTel;