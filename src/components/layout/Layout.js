// import React, { useState } from 'react'
// import { useHistory, Link } from 'react-router-dom'
// import Register from '../register/Register'
// import AllUsers from '../users/AllUsers'
// import '../../assets/css/sb-admin-2.css'


// const Layout = () => {

//   const [showForm, setShowForm] = useState(false)
//   const [allUsers, setAllUsers] = useState(false)
//   let history = useHistory()
//   return (
//     <div>
//       {/* Page Wrapper */}
//       <div id="wrapper">
//         {/* Sidebar */}
//         <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
//           {/* Sidebar - Brand */}
//           <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
//             <div className="sidebar-brand-icon rotate-n-15">
//               <i className="fas fa-laugh-wink" />
//             </div>
//             <div className="sidebar-brand-text mx-3">SB Admin</div>
//           </a>
//           {/* Divider */}
//           <hr className="sidebar-divider my-0" />
//           {/* Nav Item - Dashboard */}
//           <li className="nav-item active">
//             <a className="nav-link" onClick={() => history.push('/admin')} style={{ cursor: 'pointer' }}>
//               <i className="fas fa-fw fa-tachometer-alt" />
//               <span >Dashboard</span></a>
//           </li>
//           {/* Divider */}
//           <hr className="sidebar-divider" />
//           {/* Heading */}
//           <div className="sidebar-heading">
//             Interface
//           </div>
//           {/* Nav Item - Pages Collapse Menu */}
//           <li className="nav-item">
//             <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
//               <i className="fas fa-fw fa-cog" />
//               <span>Components</span>
//             </a>
//             <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
//               <div className="bg-white py-2 collapse-inner rounded">
//                 <h6 className="collapse-header">Custom Components:</h6>
//                 <a className="collapse-item" href="buttons.html">Buttons</a>
//                 <a className="collapse-item" href="cards.html">Cards</a>
//               </div>
//             </div>
//           </li>
//           {/* Nav Item - Utilities Collapse Menu */}
//           <li className="nav-item">
//             <Link to={`/add-user`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
//                 <i className="fas fa-fw fa-user" />
//                 <span onClick={(e) => {
//                   setShowForm(true)
//                   setAllUsers(false)
//                 }
//                 }>Add User</span>
//             </Link>
//             <Link to={`/all-users`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
//               <i className="fas fa-fw fa-user" />
//               <span onClick={(e) => setAllUsers(true)}>List Users</span>
//             </Link>
//             {/* <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
//                 <div className="bg-white py-2 collapse-inner rounded">
//                   <h6 className="collapse-header">Custom Utilities:</h6>
//                   <a className="collapse-item" href="utilities-color.html">Colors</a>
//                   <a className="collapse-item" href="utilities-border.html">Borders</a>
//                   <a className="collapse-item" href="utilities-animation.html">Animations</a>
//                   <a className="collapse-item" href="utilities-other.html">Other</a>
//                 </div>
//               </div> */}
//           </li>
//           {/* Divider */}
//           {/* Divider */}
//           <hr className="sidebar-divider d-none d-md-block" />
//           {/* Sidebar Toggler (Sidebar) */}
//           <div className="text-center d-none d-md-inline">
//             <button className="rounded-circle border-0" id="sidebarToggle" />
//           </div>
//           {/* Sidebar Message */}
//         </ul>
//         {/* End of Sidebar */}
//         {/* Content Wrapper */}
//         <div id="content-wrapper" className="d-flex flex-column">
//           {/* Main Content */}
//           <div id="content">
//             {/* Topbar */}
//             <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
//               {/* Sidebar Toggle (Topbar) */}
//               <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
//                 <i className="fa fa-bars" />
//               </button>
//               {/* Topbar Search */}
//               {/* Topbar Navbar */}
//               <ul className="navbar-nav ml-auto">
//                 {/* Nav Item - Search Dropdown (Visible Only XS) */}

//                 {/* Dropdown - Messages */}
//                 {/* Nav Item - Alerts */}
//                 {/* <div className="topbar-divider d-none d-sm-block" /> */}

//               </ul>
//             </nav>
//             {/* End of Topbar */}

//             {/* Begin Page Content */}
//             {/* { 
//                 showForm? <Register /> 
//                 : null
//               }
//               {
//                 allUsers? <AllUsers /> 
//                 : null
//               } */}
//           </div>
//           {/* End of Main Content */}
//           {/* Footer */}
//           <footer className="sticky-footer bg-white">
//             <div className="container my-auto">
//               <div className="copyright text-center my-auto">
//                 <span>Copyright © Your Website 2021</span>
//               </div>
//             </div>
//           </footer>
//           {/* End of Footer */}
//         </div>
//         {/* End of Content Wrapper */}
//       </div>
//       {/* End of Page Wrapper */}
//       {/* Scroll to Top Button*/}
//       <a className="scroll-to-top rounded" href="#page-top">
//         <i className="fas fa-angle-up" />
//       </a>
//       {/* Logout Modal*/}

//     </div>
//   )
// }

// export default Layout

import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import Register from '../register/Register'
import AllUsers from '../users/AllUsers'
import '../../assets/css/sb-admin-2.css'


const Layout = (props) => {

  // const [showForm, setShowForm] = useState(false)
  // const [allUsers, setAllUsers] = useState(false)
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
            <a className="nav-link" onClick={() => history.push('/admin')} style={{ cursor: 'pointer' }}>
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
            <Link to={`/add-user`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                <i className="fas fa-fw fa-user" />
                <span onClick={(e) => {
                  // setShowForm(true)
                  // setAllUsers(false)
                }
                }>Add User</span>
            </Link>
            <Link to={`/all-users`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-user" />
              <span onClick={(e) => {
                // setAllUsers(true)
                // setShowForm(false)
              }
              }>List Users</span>
            </Link>
            <Link to={`/add-category`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-user" />
              <span onClick={(e) => {
                // setAllUsers(true)
                // setShowForm(false)
              }
              }>Add Category</span>
            </Link>
            <Link to={`/all-categories`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-user" />
              <span onClick={(e) => {
                // setAllUsers(true)
                // setShowForm(false)
              }
              }>List Categories</span>
            </Link>
            <Link to={`/add-product`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-user" />
              <span onClick={(e) => {
                // setAllUsers(true)
                // setShowForm(false)
              }
              }>Add Product</span>
            </Link>
            <Link to={`/all-products`} style={{ cursor: 'pointer' }} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
              <i className="fas fa-fw fa-user" />
              <span onClick={(e) => {
                // setAllUsers(true)
                // setShowForm(false)
              }
              }>List Products</span>
            </Link>
          </li>
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
            </nav>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            {props.children}
            {/* { 
              showForm? <Register /> 
              : null
            }
            {
              allUsers? <AllUsers /> 
              : null
            } */}
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
      
    </div>
  )
}

export default Layout

