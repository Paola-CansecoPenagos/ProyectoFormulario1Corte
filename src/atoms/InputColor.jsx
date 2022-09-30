function InputColor({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="color" required/><span class="barra"></span>
        </>
    );
}

export default InputColor;