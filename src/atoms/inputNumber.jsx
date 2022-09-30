function InputNumber({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="number" required/><span class="barra"></span>
        </>
    );
}

export default InputNumber;