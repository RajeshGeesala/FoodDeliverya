import { useState } from "react"
//import { RestaurentData } from "../utilities/RestaurebtData";
//import { RestaurentData } from "../utilities/RestaurebtData";
//import { RestaurentData } from "../utilities/RestaurebtData";
import { Link } from "react-router-dom";

export const HeaderComponent = ( ) => {
     
   //USE STATE FOR LOGIN/LOGUOT BUTTON
  let [ Btnmae ,CngBtname]  = useState("LOGIN") ; 
  
     
    return  (
    <div className="navbar navbar-expand-md">
    <div className="navbar-brand"> <img src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
        className="logoimg" ></img> <h3 className="name">Food Box</h3></div>

            
          <button className="navbar-toggler"
              data-bs-toggle="collapse" data-bs-target="#naaav" ><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="naaav">
                <ul className="navbar-nav ms-auto me-5" >
            <li className="nav-item"> <Link className="nav-link " to="/"> Home </Link></li>
            <li className="nav-item"> <Link className="nav-link "  to="/about"> About Us </Link></li>
            <li className="nav-item"> <Link className="nav-link " to="/topoffers"> TopOffers </Link></li>
            <li className="nav-item dropdown"> <a className="nav-link dropdown-toggle" type="button" data-bs-toggle="dropdown"> Categories</a>
                 <ul className="dropdown-menu"><li className="dropdown-list"><a className="dropdown-item">Veg</a></li>
                 <li className="dropdown-list"><a className="dropdown-item">Non-Veg</a></li></ul></li>
            <li className="nav-item"> <a className="nav-link ">  Cart </a></li>
        </ul>    <button onClick={ ()=> {
                     Btnmae === "LOGIN"  ? CngBtname ("LOGOUT") : CngBtname ("LOGIN")
                     }}  > {Btnmae} </button>
                  {/* login button */}
            
             </div>
     </div> )

}