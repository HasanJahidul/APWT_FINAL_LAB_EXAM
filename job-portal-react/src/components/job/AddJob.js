
import EmployerNavbar from '../EmployerNavbar';


const AddJob = ()=>{
   
    return(
        <>
        <EmployerNavbar />
            <br/>
            <h3>Job Page</h3>
            <form
            >
                Company Name: <input type='text' name='name' /> <br/>
                Job Title: <input type='text' name='title' /><br/>
                Job Location : <input type='text' name='location' /><br/>
                Salary : <input type='text' name='salary' /><br/>
                <input type='submit' />
            </form>
        </>
    );
}

export default AddJob;