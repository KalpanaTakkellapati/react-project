import React from 'react';
export class AddEmployee extends React.Component {
    emptyEmp = {
        eid: '',
        ename:'',
        esalary:'',
    };

    constructor(props) {
        super(props);
        this.state = {
            empData: this.emptyEmp
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let emp = { ...this.state.empData};
        emp[name] = value;
        this.setState({ empData: emp});
    }
    async handleSubmit(event){
        event.preventDefault();
        const emp = this.state.empData;
        console.log("emp:" +JSON.stringify(emp));
        await fetch('http://localhost:8076/api/employee',{
            method : "POST",
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(emp),
    });
    this.props.history.push('/list-emp');
    }
    render() {
        return (<div class="container pt-5 ">
                    <div class="col-sm-6">
                    <div class="card  bg-transparent">
                        <div class="card-header text-center text-white bg-info"><b>AddEmployee</b>
                        </div>
                        <div class="card-body ">
                            <form onSubmit={this.handleSubmit}>
                                <div class="Form-group mx-2 my-3 text-black">
                                    <div class="row mx-2 my-3">
                                        <label for="username">Employee Name</label>
                                        <input type="text" 
                                        class="form-control" 
                                        onChange={this.handleChange}
                                        id="name" 
                                        name="ename"
                                        placeholder="name"/>
                                    </div>
                                    <div class="Form-group mx-2 my-3 text-black">
                                        <label for="salary">Employee Salary</label>
                                        <input type="text" 
                                        class="form-control" 
                                        onChange={this.handleChange}
                                    name="esalary"
                                        id="sal" 
                                        placeholder="salary"/>
                                    </div>
                                    <button type="submit" class="btn btn-info float-right">save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col">
                    </div>
                </div>
            </div>
       );
    }
}
