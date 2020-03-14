import React from 'react';
import { Link } from 'react-router-dom';
export class Header extends React.Component {
  render() {
    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <h2 class="text-white">
        <i class="material-icons text-primary"></i>Employee</h2>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#collapse-nav-bar">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapse-nav-bar">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item">
            <Link 
                to={'list-emp'}
                className="nav-link text-white">
                List Employee
            </Link>
            </li>
            <li class="nav-item">
            <Link 
                to={'add-emp'}
                className="nav-link text-white">
                Add Employee
            </Link>
            </li>
        </ul>
    </div>
</nav>);
  }
}
