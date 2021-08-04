import '../style.css';
import {Link} from "react-router-dom";

const EmployerTableRow = ({id=null,name,cname,number,username,password, callback})=>{
    return (
        <tbody>
        <tr>
          <td >{name}</td>
          <td >{cname}</td>
          <td >{number}</td>
          <td >{username}</td>
          <td >{password}</td>
          <button class="btn btn-fill btn-primary" onClick={()=>callback(id)}>Delete</button>|         
          <Link to={`/employer/edit/${id}`}>
          <button  class="btn btn-fill btn-primary">Edit</button>
         </Link>
        </tr>
      </tbody>
    );
}

export default EmployerTableRow;