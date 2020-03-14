import React from 'react';
class Employee extends React.Component {
    constructor() {}
            empData= [
                {
                    "empId": 1,
                    "empName": "rajesh",
                    "empSalary": "20000"
                },
                {
                    "empId": 2,
                    "empName": "sindhu",
                    "empSalary": "30000"
                },
                {
                    "empId": 3,
                    "empName": "prudhvi",
                    "empAge": "40000"
                }
            ]
        
  
    render() {
        const empList = this.empData.map((emp,i)=> {
          return <tr>
           <td>{emp.empid}</td>
            <td>{emp.empname}</td>
            <td>{emp.empsalary}</td>
        </tr>
        });
    
    return(
    <table>
        <thead>
            <tr>
                <td>EmpId</td>
                <td>EmpName</td>
                <td>EmpSalary</td>
            </tr>
        </thead>
    
    <tbody>
        {empList}
    </tbody>
    </table>
    );
    }
}
