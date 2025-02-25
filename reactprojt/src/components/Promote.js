import { useState } from "react";



function Promote(){
    const [employees,setemployees] = useState(['Vinaya','Srujan','Sanjana','Amrutha','Prithvi']);

    return(
        <div>
            <h1>
                Employee Promotion Module!
            </h1>
            <table>
                <thead>
                    <th>Emp No.</th>
                    <th>Employee</th>
                    <th>Promote</th>
                </thead>
                <tbody>
                    {
                      employees.map((emp, index) =>(
                        <tr>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                {emp}
                            </td>
                            <td><button>Promote</button></td>
                        </tr>
                      ))
                    }
                </tbody>
            </table>
        
        </div>
   
   ); 
}

export default Promote;