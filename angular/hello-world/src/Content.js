import React from 'react';
export class Content extends React.Component{

  dataText = "context"
  state={ 
      empData: []
}
  /*employee = [
      {
          eId: 1,
          eName: "Sindhu",
          eSalary: 25000
      },
      {
          eId: 2,
          eName: "ashu",
          eSalary: 25000
      },
      {
          eId: 3,
          eName: "kalpana",
          eSalary: 25000
      }
  ]*/
  componentDidMount() {
      fetch('http://localhost:8076/api/employee/all')
      .then(response => response.json())
      .then(data => this.setState({empData: data}));
      console.log("emp.data:"+this.state.empData);

  }
  render() {
      const empList = this.state.empData.map((emp, i) => {
          return  <tr>
                      <td>{emp.eid}</td>
                      <td>{emp.ename}</td>
                      <td>{emp.esalary}</td>
                      <td>
                        <button
                        className="btn-btn-danger"
                        onClick={() => this.remove(emp.eid)}></button>
                      </td>
                       </tr>
      });
      return (
          <div>
              <p>Content part! {this.dataText}</p>
              <table border="">
                  <thead>
                      <tr>
                          <td>Emp Id</td>
                          <td>Emp Name</td>
                          <td>Emp Salary</td>
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
