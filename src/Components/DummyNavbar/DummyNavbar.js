import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./DummyNav.css";

function DummyNavbar() {
  return (
    // <div  style={{ backgroundColor: '#11151B',width:'100vw' }} >
    <Navbar
      className="container navwidth"
      style={{
        position: "fixed",
        backgroundColor: "rgb(17, 21, 27)",
        zIndex: 9999,
        width: "100%",
      }}
    >
      <Navbar.Brand href="/" style={{ color: "#EFF3F8" }}>
        <img src={logo} alt="logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end mr-5">
        <Navbar.Text className="mr-4">
          <a
            href="https://github.com/ChiragDugar/vitalizer"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#EFF3F8",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.3em",
            }}
          >
            FAQ
          </a>
        </Navbar.Text>
        <Navbar.Text>
          <a
            href="https://www.canva.com/design/DAEKOh14oEM/y-owL5s4jFKPCRtAfvMGiw/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#EFF3F8",
              fontWeight: 600,
              fontSize: 14,
              letterSpacing: "0.3em",
            }}
          >
            ABOUT
          </a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    // </div>
  );
}

export default DummyNavbar;
