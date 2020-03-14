import React from 'react';
export class EmployeeList extends React.Component {
    dataText = "context"
    state={ 
        empData: []
}
    /*empData= [
    {
        "empId": 1,
        "empName": "rajesh",
        "empSalary": "20"
    },
    {
        "empId": 2,
        "empName": "sindhu",
        "empSalary": "1116"
    },
    {
        "empId": 3,
        "empName": "prudhvi",
        "empSalary": "101"
    },
    {
        "empId": 4,
        "empName": "sravya",
        "empSalary": "555"
    }
]*/
   
    componentDidMount() {
        fetch('http://localhost:8076/api/employee/all')
        .then(response => response.json())
        .then(data => this.setState({empData: data}));
        //console.log("emp.data:"+this.state.empData);


    }
     async remove(empid){
            await fetch("http://localhost:8076/api/employee/" +empid,{
              method: 'DELETE',
              headers:
              {
                'Accept':'application/json',
                'Content-Type':'application/json'
              }
            }).then(()=>{
              let updatedEmployees=[...this.state.empData].filter(i=>i.eid!==empid);
              this.setState({empData:updatedEmployees});
            });
            
            }
            
            render() {
              const empList = this.state.empData.map((emp, i) => {
                  return  <tr>
                              <td>{emp.eid}</td>
                              <td>{emp.ename}</td>
                              <td>{emp.esalary}</td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                   onClick={()=>this.remove(emp.eid)}>Delete
                                </button>
                              </td>
                          </tr>
              });
              return (
                  <div>
                      <p>Content part! {this.dataText}</p>
                      <table className="table">
                          <thead>
                              <tr>
                                  <td> Id</td>
                                  <td> Name</td>
                                  <td> Salary</td>
                                  <td>DELETE</td>
                              </tr>
                          </thead>
                          <tbody>
                                {empList}
                          </tbody>
                      </table>
                  </div>
              );
            }
    }
 
          
          
          

    
   /* render() {
        const empList = this.state.empData.map((emp, i) => {
            return  <tr>
                        <td>{emp.eId}</td>
                        <td>{emp.eName}</td>
                        <td>{emp.eSalary}</td>
                    </tr>
        });
        return (
            <div>
                <p>Content part! {this.dataText}</p>
                <table className="table">
            
                    <thead>
                        <tr>
                            <td>Emp Id</td>
                            <td>Emp Name</td>
                            <td>Emp Salary</td>
                            <td>
                                <button
                                className="btn btn-danger"
                                onClick={()=> this.remove(emp.eId)}>
                                </button>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {empList}
                    </tbody>
                </table>
            </div>
        );
    }
}*/
