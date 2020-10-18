import React from "react";
import "./doctor.css";
import MapContainer from "./mapContainer";

function Card({ data, props }) {
  return (
    <div>
      <div
        className="row card-padding"
        style={{
          boxShadow: "-4px -4px 15px 3px #080A0D, 4px 4px 15px 3px #1B222B",
          borderRadius: 10,
        }}
      >
        <div
          className="dark_text row col-lg-10"
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="dark_text col"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                style={{ height: "180px", width: "160px", borderRadius: "5px" }}
                src={data.img}
                alt="doc pic"
              ></img>
            </div>
          </div>
          <div
            className="col"
            style={{
              alignItems: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <div style={{ display: "flex" }}>
              <div
                style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
              >
                Name :
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 16,
                  marginLeft: "8px",
                  color: "rgb(14, 212, 112)",
                }}
              >
                Dr. {data.name}
              </div>
            </div>

            <div style={{ display: "flex", width: "600px" }}>
              <div
                style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
              >
                Speciality :
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 16,
                  marginLeft: "8px",
                }}
              >
                {/* {symptoms[props.el]} */}
                {data.speciality}
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
              >
                Contact :
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 16,
                  marginLeft: "8px",
                }}
              >
                {data.contact}
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{ textAlign: "center", fontWeight: 700, fontSize: 16 }}
              >
                Distance from you :
              </div>
              <div
                style={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: 16,
                  marginLeft: "8px",
                }}
              >
                {data.distance}
              </div>
            </div>
          </div>
          <div
            className="col"
            style={{
              justifyContent: "center",
              // alignItems: "center",
              display: "flex",
              // flexDirection: "column",
            }}
          >
            {/* <div style={{ textAlign: "center" }}> */}
            <MapContainer />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
