// import React from 'react';
// import {Link} from 'react-router-dom';


// const SideBar = () => {
//     return (
//         <>
// <div id="sidebar-main" className="sidebar sidebar-default">
// <div className="sidebar-category sidebar-default">
//   <div className="category-title"></div>
//   <div className="category-content">
//     <ul id="fruits-nav" className="nav flex-column">
//       <li className="nav-item1">
//         <Link to="dashboardPatient" className="nav-link active">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="active fa fa-user-circle-o fa-2x d-xl-flex align-items-xl-center "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebar d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               A propos.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item2">
//         <Link to="/contactinformation" className="nav-link" activeClassName="active">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-vcard d-xl-flex align-items-xl-center d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Informations de contact.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item3">
//         <Link to="/Metrix" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-bar-chart-o d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Métriques de santé.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item4">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-heartbeat d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Conditions / Symptomes.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item5">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-file-powerpoint-o d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Ordonnances.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item6">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-leaf d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Médicaments.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item7">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-low-vision d-xl-flex align-items-xl-center  fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Allergies.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item8">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-stethoscope d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Traitement / procédures.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item9">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-user-md d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Vaccinations.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item10">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-flask d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Tests de laboratoire.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item11">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-grav d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Mode de vie.
//             </h5>
//           </div>
//         </Link>
//       </li>
//       <li className="nav-item12">
//         <Link to="#" className="nav-link">
//           <div className="d-xl-flex justify-content-xl-start align-items-xl-center">
//             <i
//               className="noactive fa fa-life-saver d-xl-flex align-items-xl-center fa-2x "
//               aria-hidden="true"
//             />
//             <h5 className="lisidebarnoactive d-flex d-xl-flex flex-column justify-content-xl-center align-items-xl-center">
//               Assurance.
//             </h5>
//           </div>
//         </Link>
//       </li>
//     </ul>
//   </div>
// </div>
// </div>
// </>
//     )
// }

// export default SideBar;