import React from "react";
//import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from "./Sidebar";
import Canvas from "./Canvas/Canvas";
import "./DashBoard.module.css";

function DashBoard() {
  return (
    <div className="DashBoard">
      <Container>
        <Col>
          <Sidebar></Sidebar>
        </Col>

        <Col>
          <Canvas></Canvas>
        </Col>
      </Container>
    </div>
  );
}

export default DashBoard;
