import React, {useState} from 'react'
import { useHistory, Link } from 'react-router-dom'
import Register from '../register/Register'
import AllUsers from '../users/AllUsers'
import '../../assets/css/sb-admin-2.css'

// import '../../assets/js/sb-admin-2.min.js'
// import '../../assets/vendor/jquery/jquery.min.js'
// import '../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import '../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'

const Layout = () => {

  const [showForm, setShowForm] = useState(false)
  const [allUsers, setAllUsers] = useState(false)
  let history = useHistory()
    return (
        <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
              <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink" />
              </div>
              <div className="sidebar-brand-text mx-3">SB Admin</div>
            </a>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item active">
              <a className="nav-link" onClick={() => history.push('/admin')}>
                <i className="fas fa-fw fa-tachometer-alt" />
                <span >Dashboard</span></a>
            </li>
            {/* Divider */}
            <hr className="sidebar-divider" />
            {/* Heading */}
            <div className="sidebar-heading">
              Interface
            </div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item">
              <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i className="fas fa-fw fa-cog" />
                <span>Components</span>
              </a>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Components:</h6>
                  <a className="collapse-item" href="buttons.html">Buttons</a>
                  <a className="collapse-item" href="cards.html">Cards</a>
                </div>
              </div>
            </li>
            {/* Nav Item - Utilities Collapse Menu */}
            <li className="nav-item">
              <a style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-user" />
                <span onClick={(e) => setShowForm(true)}>Add User</span>
              </a>
              <a style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-user" />
                <span onClick={(e) => setAllUsers(true)}>List Users</span>
              </a>
              {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Custom Utilities:</h6>
                  <a className="collapse-item" href="utilities-color.html">Colors</a>
                  <a className="collapse-item" href="utilities-border.html">Borders</a>
                  <a className="collapse-item" href="utilities-animation.html">Animations</a>
                  <a className="collapse-item" href="utilities-other.html">Other</a>
                </div>
              </div> */}
            </li>
            {/* Divider */}
            {/* Divider */}
            <hr className="sidebar-divider d-none d-md-block" />
            {/* Sidebar Toggler (Sidebar) */}
            <div className="text-center d-none d-md-inline">
              <button className="rounded-circle border-0" id="sidebarToggle" />
            </div>
            {/* Sidebar Message */}
          </ul>
          {/* End of Sidebar */}
          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                  <i className="fa fa-bars" />
                </button>
                {/* Topbar Search */}
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
                  {/* Nav Item - Search Dropdown (Visible Only XS) */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-search fa-fw" />
                    </a>
                    {/* Dropdown - Messages */}
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* Nav Item - Alerts */}
                  {/* <div className="topbar-divider d-none d-sm-block" /> */}
                  <li className="nav-item dropdown no-arrow">
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                      <img className="img-profile rounded-circle" src="img/undraw_profile.svg" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                        Activity Log
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* End of Topbar */}
              {/* Begin Page Content */}
              { 
                showForm? <Register /> 
                : null
              }
              {
                allUsers? <AllUsers /> 
                : null
              }
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2021</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a className="btn btn-primary" href="login.html">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Layout
