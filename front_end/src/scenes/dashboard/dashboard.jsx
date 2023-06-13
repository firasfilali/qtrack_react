import { Box } from "@mui/material";
import React from "react";
import "../../assets/css/dashboard.css";
import { data } from "../../utils/data";
import Card from "../../components/cards/card";

const Dashboard = (props) => {
  return (
    <div className="warper">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col p-3">
            <div className="container m-30">
              <div className="row">
                {data.map((item, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <Card
                        title={item.section}
                        reference={item.reference}
                        conforme={item.conforme}
                        nonconforme={item.Nconforme}
                        key={item.id}
                        onClick={() => console.log("hello")}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
