import React, { useState } from "react";
import Headerloged from "../component/logedinheader";

const image = '/logomain.png';

const Complaints = () => {
    
    return (
        <>
            <Headerloged />
            <div className="container login-div">
                <center>
                    <div className="Complaintform">
                        <div style={{ textAlign: "left", marginLeft: "40px", marginTop: "20px" }}>
                            <h5>Please Enter Correct details!!</h5>
                        </div>
                        <hr style={{ width: "90%", backgroundColor: "rgb(154,216,249)", height: "1px" }}>
                        </hr>
                        <p style={{ textAlign: "right", marginRight: "50px" }}><span style={{ color: "red" }}>* Indicates mandatory fields</span></p>
                        <div className="row" style={{marginTop:"50px"}}>
                            <div className="col-lg-4" style={{ textAlign: "left", marginLeft: "110px", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Vehicle No. <span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input style={{
                                    width: "100%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                            <div className="col-lg-3" style={{ textAlign: "left", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Vehicle Brand<span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input style={{
                                    width: "100%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                            <div className="col-lg-3" style={{ textAlign: "left", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Model Of Vehicle<span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input style={{
                                    width: "75%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: "40px" }}>
                            <div className="col-lg-4" style={{ textAlign: "left", marginLeft: "110px", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Place of Incidence <span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input style={{
                                    width: "100%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                            <div className="col-lg-3" style={{ textAlign: "left", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Date Of Incidence<span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input type="date" style={{
                                    width: "100%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                            <div className="col-lg-3" style={{ textAlign: "left", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Time Of Incidence<span style={{ color: "red" }}>*</span></label>
                                <br />
                                <input type="time" style={{
                                    width: "75%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px", paddingLeft: "10px"
                                }} ></input>
                                <br />
                            </div>
                        </div>

                        <div className="row" style={{ marginTop: "40px" }}>
                            <div className="col-lg-4" style={{ textAlign: "left", marginLeft: "110px", marginTop: "-20px" }}>
                                <label style={{ fontWeight: "500" }}>Proof of Incidence </label>
                                <br />
                                <input type="file" style={{
                                    width: "100%", border: "1px solid rgb(154,216,249)",
                                    borderRadius: "10px", height: "40px",padding:"4px 0 0 10px",backgroundColor:"white"
                                }} ></input>
                                <br />
                            </div>
                        </div>
                        <button style={{ marginTop: "20px", backgroundColor: "rgb(211,7,6)", width: "75%", border: "1px solid white", borderRadius: "10px", height: "40px", marginBottom: "20px", color: "white", fontWeight: "500" }} >Register</button>
                    </div>
                </center>
            </div>
            <br />
            
        </>
    )
}

export default Complaints;