function InputEmail({tipo,text}){
    return(
        <>
        <input classname="form" type={tipo} name={text} id="email" required/><span class="barra"></span>
        </>
    );
}

export default InputEmail;