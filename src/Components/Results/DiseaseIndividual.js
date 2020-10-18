import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin, Button } from "antd";
import { Link } from "react-router-dom";

function DiseaseIndividual(props) {
  const [disease, setDiseaseName] = useState("");
  const [spintime, setspintime] = useState(true);
  const [data, setData] = useState({});
  const [symp, setSymp] = useState([]);
  const diseases = {
    artery: "Coronary Artery Disease",
    liver: "Liver Disease",
    malignancy: "Malignancy",
    pulmonary: "Chronic Obstructive Pulmonary Disease",
    renal: "Chronic Renal Disease",
    resp: "Respiratory Disease (non-COPD)",
    stroke: "Stroke",
  };

  const APIs = {
    artery: 0,
    liver: 2,
    malignancy: 3,
    pulmonary: 5,
    renal: 1,
    resp: 4,
    stroke: 6,
  };

  useEffect(() => {
    setDiseaseName(props.location.state.disease);
    axios
      .get("https://healthinsafe.herokuapp.com/disease_info")
      .then((res) => {
        console.log(res);
        setData(res.data.disease_info[APIs[props.location.state.disease]]);
        setSymp(
          res.data.disease_info[
            APIs[props.location.state.disease]
          ].PossibleSymptoms.split(",")
        );
        setspintime(false);
      })
      .catch((err) => setspintime(false));
    // eslint-disable-next-line
  }, []);

  return (
    <Spin tip="Loading..." spinning={spintime}>
      <div
        style={{
          backgroundColor: "#11151b",
          color: "#E7EBF0",
          paddingTop: "3.5rem",
        }}
      >
        <div className="container" style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "32px",
              fontWeight: 700,
              fontSize: 24,
              paddingBottom: 10,
              borderBottom: "1px solid #E7EBF0",
            }}
          >
            <div>{diseases[disease]}</div>

            <div>
              <Button className="first_btn btn_landing">
                <Link to="/doctors" style={{ fontWeight: 600 }}>
                  VIEW NEARBY DOCTORS
                </Link>
              </Button>
            </div>
          </div>

          <div style={{ paddingTop: "2rem", fontWeight: 600, fontSize: 16 }}>
            Symptoms:
          </div>
          <div>
            <ul style={{ paddingLeft: 17 }}>
              {symp.map((el) => {
                return <li>{el}</li>;
              })}
            </ul>
          </div>

          <div style={{ paddingTop: "2rem", fontWeight: 600, fontSize: 16 }}>
            Description:
          </div>
          <div>{data.Description}</div>

          <div style={{ paddingTop: "2rem", fontWeight: 600, fontSize: 16 }}>
            Medical Condition:
          </div>
          <div>{data.MedicalCondition}</div>

          <div style={{ paddingTop: "2rem", fontWeight: 600, fontSize: 16 }}>
            Treatment Description:
          </div>
          <div>{data.TreatmentDescription}</div>
        </div>
      </div>
    </Spin>
  );
}

export default DiseaseIndividual;
