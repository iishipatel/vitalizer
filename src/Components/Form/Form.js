// import React from 'react'
import FormSection from "./FormSection";
import circlesimg from "../../assets/circles.png";
import { Alert } from "antd";
import React from "react";

function Form() {
  return (
    // <Spin spinning={loader} tip="Please wait while we are generating your report" className="loader_form">
    <div
      className="div-head"
      style={{
        backgroundColor: "#11151B",
        color: "#EFF3F8",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        paddingTop: "3.5rem",
        overflowY: "hidden",
      }}
    >
      <div className="row container" style={{ margin: 0 }}>
        <div className="col-lg-7 div-head" style={{ overflowY: "hidden" }}>
          <Alert
            message="Warning"
            description="Make sure that values provided are accurate and latest. These will highly influence final reports."
            type="warning"
            showIcon
            className="alert_form"
            style={{ width: "70%", left: -15 }}
          />
        </div>
        <div className="col-lg-5 form-view">
          <div className="parent_scroll">
            <FormSection />
          </div>
        </div>
        <img src={circlesimg} alt="circle" className="circleimg"></img>
      </div>
    </div>
    // </Spin>
  );
}

export default Form;
