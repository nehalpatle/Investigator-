import React, { useState } from "react";
import Headerloged from "../component/logedinheader";

const image = '/logomain.png';

const Boots = () => {
    const [status, setStatus] = React.useState(false)
    const [data,setData]=useState(null)
    function getdata(val){
        setData(val.target.value)
    }
    return (
        <>
        <Headerloged/>
            <div className="container login-div">
            <center>
                    <div className="login1">
                    <div style={{ textAlign: "left", marginLeft: "40px", marginTop: "20px" }}>
                            <h5>Please enter your Tracking details!!</h5>
                        </div>
                        <hr style={{ width: "90%", backgroundColor: "rgb(154,216,249)", height: "1px" }}>
                        </hr>
                        <p style={{ textAlign: "right", marginRight: "20px" }}><span style={{ color: "red" }}>* Indicates mandatory fields</span></p>
                        <div style={{ textAlign: "left", marginLeft: "150px", marginTop: "-20px" }}>
                            <label style={{ fontWeight: "500" }}>Vehicle No. <span style={{ color: "red" }}>*</span></label>
                            <br />
                            <input style={{
                                width: "75%", border: "1px solid rgb(154,216,249)",
                                borderRadius: "10px", height: "40px",paddingLeft:"10px"
                            }} onChange={getdata}></input>
                            <br />
                            <button style={{ marginTop: "20px", backgroundColor: "rgb(211,7,6)", width: "75%", border: "1px solid white", borderRadius: "10px", height: "40px", marginBottom: "20px", color: "white", fontWeight: "500" }} onClick={() => setStatus(true)}>Track</button>
                        </div>
                        </div>
                        </center>
                        </div>
                        <br/>
            {
                status ?
                    <div>
                    <center>
                        <table id="table">
                            <thead>
                                <th id="th-table">Vehicle No.</th>
                                <th id="th-table">Date of theft</th>
                                <th id="th-table">Time of theft</th>
                                <th id="th-table">Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="td-table">{data}</td>
                                    <td id="td-table">10/02/2022</td>
                                    <td id="td-table">1:08 pm</td>
                                    <td id="td-table">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                        </center>
                    </div>
                    : null
            }
        </>
    )
}

export default Boots;