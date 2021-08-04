import AdminNavbar from '../AdminNavbar';
const RegisterEmployer = ()=>{
    
    return(
        
        <th>
            <AdminNavbar/>
            <br/>
            <h3> Employer Page: </h3>
            <form
                
            >
                Employer Name: <input type='text' name='name'  /> <br/>
                Company: <input type='text' name='cName'  /> <br/>
                Contact No: <input type='text' name='number'  /><br/>
                Username: <input type='text' name='username'  /><br/>
                Password: <input type='text' name='password'  /><br/>
                <input type='submit' />
            </form>
        </th>
        
    );
}
export default RegisterEmployer;