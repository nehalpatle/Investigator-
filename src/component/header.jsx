import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";


const image = '/logomain.png';
const Header=()=>{
    return(
        <>
                        <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 menu">
                        <nav>
                            <ul>
                                <li><NavLink to={'/pages/home'} className={'nav'}><span><FaHome style={{ marginTop: "-5px" }} /></span>Home</NavLink></li>
                                <span style={{ color: "white" }}>|</span>
                                <li><NavLink to={'/component/login'} className={'nav'}><span><BiLogIn style={{ marginTop: "-5px" }} /></span>Login</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 navrow">
                        <ul className="navul">
                            <li><img src={image} id="img-logo"></img></li>
                            <li><h3 style={{ fontWeight: "bolder", marginBottom: "-5px", marginTop: "18px" }}>Investigator+</h3><span style={{ fontWeight: "bold", marginLeft: "20px" }}>An e-Initiative</span></li>
                            <li style={{marginLeft:"850px",marginTop:"-20px"}}><input style={{ padding: "10px 20px",borderRadius: "10px", boxShadow: "0px 0px 3px 1px rgb(240, 238, 238)" }} placeholder="🔍 Search"></input></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header