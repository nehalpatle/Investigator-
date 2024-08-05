import React from "react";
import Header from "./header";
import { FcGoogle } from "react-icons/fc";
import { RiFacebookCircleFill } from "react-icons/ri";


const Login = () => {
    return (
        <>
        <Header/>
            <div className="container login-div">
                <div style={{ marginTop: "20px" }}>
                    <h4>Vehicle Investigation Services</h4>
                </div>
                <hr>
                </hr>
                <div style={{ textAlign: "center", backgroundColor: "yellow", color: "red", marginTop: "-10px" }}>
                    <p>For Using These Services "Please Login!!"</p>
                </div>

                <center>
                    <div className="login">
                        <div style={{ textAlign: "left", marginLeft: "40px", marginTop: "20px" }}>
                            <h5>Please enter your login details!!</h5>
                        </div>
                        <hr style={{ width: "90%", backgroundColor: "rgb(154,216,249)", height: "1px" }}>
                        </hr>
                        <p style={{ textAlign: "right", marginRight: "20px" }}><span style={{ color: "red" }}>* Indicates mandatory fields</span></p>
                        <div style={{ textAlign: "left", marginLeft: "150px", marginTop: "-20px" }}>
                            <label style={{ fontWeight: "500" }}>User-Id <span style={{ color: "red" }}>*</span></label>
                            <br />
                            <input style={{
                                width: "75%", border: "1px solid rgb(154,216,249)",
                                borderRadius: "10px", height: "40px",paddingLeft:"10px"
                            }} required />
                            <br />
                            <label style={{ fontWeight: "500", marginTop: "8px" }}>Password <span style={{ color: "red" }}>*</span></label>
                            <br />
                            <input style={{
                                width: "75%", border: "1px solid rgb(154,216,249)",
                                borderRadius: "10px", height: "40px",paddingLeft:"10px"
                            }} required />
                            <br />
                            <button style={{ marginTop: "20px", backgroundColor: "rgb(211,7,6)", width: "75%", border: "1px solid white", borderRadius: "10px", height: "40px", marginBottom: "20px", color: "white", fontWeight: "500" }}><a style={{color:"white",textDecoration:"none"}} href="/component/loginhome">Login</a></button>
                            <h6 style={{marginLeft:"230px"}}>or</h6>
                            <h6 style={{marginLeft:"180px"}}>Login with: <a href="#"><FcGoogle style={{fontSize:"20px"}}/> </a><a href="#"><RiFacebookCircleFill style={{fontSize:"20px"}}/></a></h6>
                        </div>
                    </div>
                </center>
                <br />
                <center>
                    <div>
                        <button style={{ backgroundColor: "rgb(0,46,81)", color: "white", borderRadius: "15px", padding: "3px 8px" }}>Click here to register</button>
                    </div>
                </center>

            </div>
        </>
    )
}

export default Login