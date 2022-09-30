function InputDate({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="date" required/><span class="barra"></span>
        </>
    );
}

export default InputDate;