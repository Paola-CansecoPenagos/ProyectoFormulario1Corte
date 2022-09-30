function InputTime({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="time" required/><span class="barra"></span>
        </>
    );
}

export default InputTime;