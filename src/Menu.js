import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-light-primary elevation-4">
    {/* Brand Logo */}
    <a href="/home" className="brand-link">
      <img src="/apple-touch-icon.png" alt="Docsien Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Docsien</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user3-128x128.jpg" className="img-circle elevation-2" alt="" />
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
         <li class="nav-item menu-open">
      <a href="#" class="nav-link active">
        <i class="nav-icon fas fa-tachometer-alt"></i>
        <p> Dashboard <i class="right fas fa-angle-left">
          </i>
        </p>
      </a>
      <ul class="nav nav-treeview">
        <li class="nav-item">
          <a href="#" class="nav-link active">
            <i class="far fa-circle nav-icon"></i>
            <p>Page One</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <i class="far fa-circle nav-icon"></i>
            <p>Page Two</p>
          </a>
        </li>
      </ul>
    </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th" />
              <p>Simple Link
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
        </ul>

        {/* <li className="nav-item">
  <a href="#" className="nav-link">
    <i className="nav-icon fas fa-search" />
    <p>
      Search
      <i className="fas fa-angle-left right" />
    </p>
  </a>
  <ul className="nav nav-treeview">
    <li className="nav-item">
      <a href="pages/search/simple.html" className="nav-link">
        <i className="far fa-circle nav-icon" />
        <p>Simple Search</p>
      </a>
    </li>
    <li className="nav-item">
      <a href="pages/search/enhanced.html" className="nav-link">
        <i className="far fa-circle nav-icon" />
        <p>Enhanced</p>
      </a>
    </li>
  </ul>
</li> */}




      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>



        )
    }
}
