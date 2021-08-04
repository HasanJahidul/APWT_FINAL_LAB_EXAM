const Login = ()=>{
    
    return(
        <th align="center">
            <br/>
            <h3 align="center"> Login </h3>
            <form
                
            >
                Name: <input type='text' name='name' align="center"  /> <br/>
                password: <input type='text' name='password' align="center"  /><br/>
                <input type='submit' value='login'/>
            </form>
        </th>
        
    );
}
export default Login;