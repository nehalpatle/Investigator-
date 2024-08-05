import React from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import Headerloged from "../component/logedinheader";

const homeimg1 = '../homeimg1.png'
const homeimg2 = '../homeimg2.png'
const Loginhome = () => {

  return (
    <>
      <Headerloged />
      <div className="container-fluid" style={{ marginBottom: "50px" }}>
        <h2 style={{ fontWeight: "600", fontFamily: "sans-serif", margin: "50px 80px 0 95px" }}>Answer To Your Queries</h2>
        <div className="row" style={{ margin: "30px 80px 0 80px" }}>
          <div className="col-lg-5 col-md-5 col-sm-6" style={{ height: "100%", backgroundColor: "rgb(244,247,250)", borderRadius: "18px", padding: "0 30px", marginLeft: "60px" }}>
            <div>
              <h5 style={{ fontWeight: "650", marginTop: "30px", marginBottom: "15px", fontSize: "22px" }}>Steps To Register Complaint</h5>
              <p>1.Visit the Investigator+ website or open the app.</p>
              <p>
                2.Click on the “Register Complaint” tab.
              </p>
              <p>3.Enter vehicle registration number and Fill the ahead form.
              </p>
              <p>4.You will find Complaint status, which once you click tracking button.
              </p>
              <p>5.Once you click on "Submit", you will get the complaint Registered.</p>
              <button style={{ padding: "10px 20px", borderRadius: "10px", width: "40%", margin: "10px 0 10px -0px", border: "none", marginLeft: "17px", backgroundColor: "rgb(255,255,255,0.9)", color: "white", boxShadow: "0px 0px 4px 2px lightgrey" }}><a style={{ textDecoration: "none" }} href="/pages/complaintform">Register Complaint</a></button>
              <br></br>
              <img src={homeimg1} style={{ height: "200px", width: "300px", marginLeft: "50px", marginBottom: "30px", marginTop: "20px" }}></img>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6" style={{ height: "100%", backgroundColor: "rgb(244,247,250)", borderRadius: "18px", marginLeft: "80px", padding: "0 30px" }}>
            <div>
              <h5 style={{ fontWeight: "650", marginTop: "30px", marginBottom: "15px", fontSize: "22px" }}>Steps To Track Complaint</h5>
              <p>1.Visit the Investigator+ website or open the app.</p>
              <p>
                2.Click on the “Tracking Button” tab.
              </p>
              <p>3.Enter your vehicle registration number and click on Get Details.
              </p>
              <p>4.You will find an update, which once you click.
              </p>
              <p>5.Once you click, you will get the Complaint status.</p>
              <button style={{ padding: "10px 20px", borderRadius: "10px", width: "40%", margin: "10px 0 10px -0px", border: "none", marginLeft: "17px", backgroundColor: "rgb(255,255,255,0.9)", color: "white", boxShadow: "0px 0px 4px 2px lightgrey" }}><a style={{ textDecoration: "none" }} href="/pages/tracking">Track Complaint</a></button>
              <br></br>
              <img src={homeimg2} style={{ height: "200px", width: "300px", marginLeft: "80px", marginBottom: "30px", marginTop: "20px" }}></img>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}


export default Loginhome
