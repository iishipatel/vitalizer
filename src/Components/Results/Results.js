import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResultCard from "./ResultCard";
import { LinkOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Results.css";

import { Switch } from "antd";

function Results(props) {
  const [userData, setUserData] = useState(null);
  const [userName, setName] = useState("");
  const [BMI, setBMI] = useState(null);
  const [gender, setGender] = useState(null);
  const [values, setValues] = useState(null);
  const [bph, setbph] = useState(null);
  const [bpl, setbpl] = useState(null);
  const [check, setCheck] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (!location.userData) {
      setUserData(JSON.parse(localStorage.getItem("setUserData")));
      setName(JSON.parse(localStorage.getItem("setName")));
      setBMI(JSON.parse(localStorage.getItem("setBMI")));
      setGender(JSON.parse(localStorage.getItem("setGender")));
      setValues(JSON.parse(localStorage.getItem("setValues")));
      setbph(JSON.parse(localStorage.getItem("setbph")));
      setbpl(JSON.parse(localStorage.getItem("setbhl")));
    } else {
      setUserData(location.userData.detail);
      setName(location.usersName);
      setBMI(location.bmi);
      setGender(location.gender);
      setValues(location.values);
      setbph(location.bphigh);
      setbpl(location.bplow);

      localStorage.setItem(
        "setUserData",
        JSON.stringify(location.userData.detail)
      );
      localStorage.setItem("setName", JSON.stringify(location.usersName));
      localStorage.setItem("setBMI", JSON.stringify(location.bmi));
      localStorage.setItem("setGender", JSON.stringify(location.gender));
      localStorage.setItem("setValues", JSON.stringify(location.values));
      localStorage.setItem("setbph", JSON.stringify(location.bphigh));
      localStorage.setItem("setbhl", JSON.stringify(location.bplow));
    }
  }, [location, props]);

  if (!userData) {
    return <h3>Loading..</h3>;
  }

  function onChange(checked) {
    setCheck(checked);
  }

  const diseases = {
    artery: "Coronary Artery Disease",
    liver: "Liver Disease",
    malignancy: "Malignancy",
    pulmonary: "Chronic Obstructive Pulmonary Disease",
    renal: "Chronic Renal Disease",
    resp: "Respiratory Disease (non-COPD)",
    stroke: "Stroke",
  };

  return (
    <div className={check ? "dark" : "light"}>
      <div className="container margin-results" style={{ margin: 0 }}>
        <Switch defaultChecked onChange={onChange} className="switch_toggle" />

        <div
          className={check ? "dark_text row" : "light_text row"}
          style={{ fontSize: 36, margin: 0, marginBottom: "1rem" }}
        >
          Hello{" "}
          <span style={{ color: "#0ED470", fontWeight: 600, paddingLeft: 5 }}>
            {userName}
          </span>
          , your report has been generated.
        </div>

        <div
          className={check ? "dark_text row" : "light_text row"}
          style={{ margin: 0, marginBottom: "2rem" }}
        >
          <div className="col" style={{ padding: 0 }}>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}> Age:</span>{" "}
              <span> {values.age} Years old</span>
            </div>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>Height:</span>{" "}
              <span> {values.height} cm </span>{" "}
            </div>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>Weight:</span>{" "}
              <span> {values.weight} kg</span>
            </div>
          </div>
          <div className="col" style={{ padding: 0 }}>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}> Gender:</span>{" "}
              <span> {gender} </span>
            </div>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}> Heart Rate:</span>{" "}
              <span> {values.hr} bpm </span>
            </div>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>Temperature:</span>{" "}
              <span> {values.temp} °F</span>
            </div>
          </div>
          <div className="col" style={{ padding: 0 }}>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>Blood Pressure:</span>{" "}
              <span>
                {" "}
                {bpl} / {bph}{" "}
              </span>
            </div>
            <div style={{ fontSize: 14 }}>
              <span style={{ fontSize: 16 }}>Body Mass Index(BMI): </span>{" "}
              <span>{BMI.toFixed(2)}</span>
            </div>
          </div>
        </div>
        {Object.keys(userData).map((el) => {
          return (
            <div>
              <ResultCard
                check={check}
                el={el}
                userData={userData}
                diseases={diseases}
              />
              <Link
                to="/doctors"
                className={
                  check
                    ? "cursor-change dark_text"
                    : "cursor-change light_text "
                }
                style={{ float: "left", fontSize: "12px", marginTop: "10px" }}
              >
                <LinkOutlined
                  style={
                    check
                      ? { color: "#EFF3F8", paddingRight: 5 }
                      : { color: "#000", paddingRight: 5 }
                  }
                />
                Doctors near you
              </Link>

              <div
                className={
                  check
                    ? "cursor-change dark_text"
                    : "cursor-change light_text "
                }
                onClick={() =>
                  props.history.push("/detailed-results", { disease: el })
                }
                style={{
                  textAlign: "right",
                  paddingTop: 10,
                  paddingBottom: "2rem",
                  fontSize: 11.69,
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <LinkOutlined
                  style={
                    check
                      ? { color: "#EFF3F8", paddingRight: 5 }
                      : { color: "#000", paddingRight: 5 }
                  }
                />
                Know more about {diseases[el]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Results;
