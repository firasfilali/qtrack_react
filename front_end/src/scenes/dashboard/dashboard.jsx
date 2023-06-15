import { Box } from "@mui/material";
import React from "react";
import "../../assets/css/dashboard.css";
import { data } from "../../utils/data";
import Card from "../../components/cards/card";
import { Row, Col } from "react-bootstrap";

const Dashboard = (props) => {
  return (
    <div style={{marginTop: "10px"}}>
      <Row>
      {data.map((item, index) => {
        return (
          <div className="col-md-4" key={index}>
            <Card
              title={item.section}
              reference={item.reference}
              conforme={item.conforme}
              nonconforme={item.Nconforme}
              key={item.id}
             
            />
          </div>
        );
      })}
      </Row>
    </div>
  );
};

export default Dashboard;
