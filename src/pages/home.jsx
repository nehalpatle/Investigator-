import React from "react";
import Header from "../component/header";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const homeimg1='../homeimg1.png'
const homeimg2='../homeimg2.png'
const First = () => {

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row" style={{ margin: "50px 80px 0 80px" }}>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <h1 style={{ fontWeight: "600", fontFamily: "sans-serif" }}>Check Investigation Report Online</h1>
            <br />
            <p style={{ fontSize: "20px", fontFamily: "sans-serif" }}><IoCheckmarkDoneCircle style={{ color: "green" }} />Register Complaint Against Vehicle</p>
            <p style={{ fontSize: "20px", fontFamily: "sans-serif" }}><IoCheckmarkDoneCircle style={{ color: "green" }} />Get Assured Information Regarding Vehicle</p>
            <p style={{ fontSize: "20px", fontFamily: "sans-serif" }}><IoCheckmarkDoneCircle style={{ color: "green" }} />Track Vehicle Information By Vehicle Number</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="homesrchquery">
              <div className="container-fluid">
                <label style={{ fontSize: "25px", fontWeight: "bold", marginTop: "20px", marginLeft: "17px" }}>
                  Search Your Query
                </label>
                <br />
                <input style={{ padding: "10px 20px", width: "90%", borderRadius: "10px", boxShadow: "0px 0px 3px 1px rgb(240, 238, 238)", marginLeft: "17px" }} placeholder="Enter Your Query"></input>
                <button style={{ padding: "10px 20px", width: "90%", borderRadius: "10px", width: "90%", margin: "20px 0 10px 0", border: "none", marginLeft: "17px", backgroundColor: "rgb(0,46,81,0.9)", color: "white" }}>Search Query</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{marginBottom:"50px"}}>
        <h2 style={{ fontWeight: "600", fontFamily: "sans-serif", margin: "50px 80px 0 95px" }}>Answer To Your Queries</h2>
        <div className="row" style={{ margin: "30px 80px 0 80px" }}>
          <div className="col-lg-5 col-md-5 col-sm-6" style={{ height: "100%", backgroundColor: "rgb(244,247,250)", borderRadius: "18px",padding:"0 30px",marginLeft: "60px" }}>
            <div>
              <h5 style={{ fontWeight: "650", marginTop: "30px",marginBottom:"15px",fontSize:"22px" }}>Steps To Register Complaint</h5>
              <p>1.Visit the Investigator+ website or open the app.</p>
              <p>
                2.Click on the “Register Complaint” tab.
              </p>
              <p>3.Enter vehicle registration number and Fill the ahead form.
              </p>
              <p>4.You will find Complaint status, which once you click tracking button.
              </p>
              <p>5.Once you click on "Submit", you will get the complaint Registered.</p>
                <img src={homeimg1} style={{height:"200px",width:"300px",marginLeft:"50px",marginBottom:"30px",marginTop:"20px"}}></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6" style={{ height: "100%", backgroundColor: "rgb(244,247,250)", borderRadius: "18px", marginLeft: "80px",padding:"0 30px" }}>
            <div>
            <h5 style={{ fontWeight: "650", marginTop: "30px",marginBottom:"15px",fontSize:"22px" }}>Steps To Track Complaint</h5>
            <p>1.Visit the Investigator+ website or open the app.</p>
              <p>
                2.Click on the “Tracking Button” tab.
              </p>
              <p>3.Enter your vehicle registration number and click on Get Details.
              </p>
              <p>4.You will find an update, which once you click.
              </p>
              <p>5.Once you click, you will get the Complaint status.</p>
                <img src={homeimg2} style={{height:"200px",width:"300px",marginLeft:"80px",marginBottom:"30px",marginTop:"20px"}}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default First
