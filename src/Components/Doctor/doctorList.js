import React from "react";
import Card from "./doctorCard";
import "./doctor.css";

function DoctorList(props) {
  const data = [
    {
      id: 1,
      name: "Vishali Mittal",
      img:
        "https://debatechamber.com/wp-content/uploads/2017/02/bigstock-Portrait-of-a-friendly-female-26984102-2-238x300.jpg",
      speciality: "Pulmonologist",
      contact: "9988383822",
      distance: "0.3 km",
    },
    {
      id: 2,
      name: "Sunil Chawla",
      img:
        "https://www.fortisescorts.in/uploaded_files/doctors/Dr-Ashok-Seth6105713.jpg",
      speciality: "Respiratory Therapist",
      contact: "9389988322",
      distance: "1.2 km",
    },
    {
      id: 3,
      name: "Ankush Twagi",
      img:
        "https://www.fortisescorts.in/uploaded_files/doctors/Dr.-Atul-Mathur8764109.jpg",
      speciality: "General Physician",
      contact: "8389988322",
      distance: "1.8 km",
    },
    {
      id: 4,
      name: "Steve Rodger",
      img:
        "https://www.fortisescorts.in/uploaded_files/doctors/ankush9104542.jpg",
      speciality: "Chest Specialist",
      contact: "8382299883",
      distance: "2.1 km",
    },
    {
      id: 5,
      name: "Anita Singh",
      img:
        "https://www.fortisescorts.in/uploaded_files/doctors/Dr-Aparna-Jaswal2560351.jpg",
      speciality: "Pulmonologist",
      contact: "98765456789",
      distance: "2.3 km",
    },
  ];

  return (
    <div className="margintop_doc_card">
      <h3
        style={{ color: "white", marginLeft: "142px", paddingBottom: "32px" }}
      >
        Nearby doctors:
      </h3>

      {data.map((user) => (
        <Card data={user} props={props} />
      ))}
    </div>
  );
}

export default DoctorList;
