function RegisterationComp(props){
    return(
        <div>
            <h3>{props.hText}</h3>
            <input type="text" placeholder="mobile ..."/><br/><br/>
            <input type="text" placeholder="password ..."/><br/><br/>
            <button>{props.bText}</button><br/><br/>

        </div>
    )
}
export default RegisterationComp;