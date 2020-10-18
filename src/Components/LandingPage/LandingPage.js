import React from "react";
import "./landing.css";

import doc from "../../assets/landing.png"

import { Button } from "antd";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing_bg">
      <h1 className="heading_landing">
      Your medical report is just <span className="green_hulk">one-click</span> away.
      </h1>

      <p className="p_landing">
      With our product users can check the probability of having rather life threatening disease by just checking their vitals at home.
<br></br>
Our AI curated model, carefully analyzes user fed data and gives a probable prediction of the severity of the ailment.
      </p>

      <img alt="doc" className="circle_doc" src={doc}></img>

      <div className="Button_grp_landing">
        
        <Button block className="first_btn btn_landing">
          <Link to="/form" style={{ fontWeight: 600 }} >GET STARTED</Link>
        </Button>
      </div>
    </div>
  );
}

export default Landing;