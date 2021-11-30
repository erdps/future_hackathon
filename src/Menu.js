import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-light-primary elevation-4">
    {/* Brand Logo */}
    <a href="/home" className="brand-link">
      <img src="img/3d.png" alt="Docsien Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Docsien</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="img/user3-128x128.jpg" className="img-circle elevation-2" alt="" />
        </div>
        <div className="info">
          {/* Profile (will be updated) */}
          <a href="#" className="d-block">Dr. Everydayhacks</a>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          {/* <li class="nav-item menu-open">
      <a href="#" class="nav-link active">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p>
          Starter Pages
          <i class="right fas fa-angle-left"></i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item">
          <a href="#" class="nav-link active">
            <i class="far fa-circle nav-icon"></i>
            <p>Active Page</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>Inactive Page</p>
          </a>
        </li>
      </ul>
    </li> */}
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Simple Link
                {/* new notif*/}
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>



        )
    }
}
