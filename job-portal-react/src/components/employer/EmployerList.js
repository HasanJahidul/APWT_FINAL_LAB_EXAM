import EmployerTableRow from './EmployerTableRow';
import AdminNavbar from '../AdminNavbar';
import '../style.css';
const EmployerList = ({list, deleteCallback})=>{
   
    return (
        <>
        <AdminNavbar/>
        <div class="row">
  <div class="col-md-12">
    <div class="card ">
      <div class="card-header">
        <h3 class="card-title"> Employer List</h3>
      </div>
      <div class="card-body">
   
               
                    <table class="table tablesorter ">
                        <thead class=" text-primary">
                            <tr>
                                <th>Employer Name</th>
                                <th>Company Name</th>
                                <th>Contact NO.</th>
                                <th>Username</th>
                                <th >Password</th>
                                <th align="center">Action</th>
                            </tr>
                        </thead>
                        {
                            list.map((u)=>{
                                return  <EmployerTableRow key={u.id} {...u} callback={deleteCallback}/>
                             })
                        }
                    </table>            
      </div>
    </div>
  </div>
  
</div>
       </> 
    );
}

export default EmployerList;