import { Box } from "@mui/material";
import React from "react";
import Topbar from "../global/Topbar";
import "../../assets/css/dashboard.css";
import { data } from "../../utils/data";
import Card from "../../components/cards/card";

const Dashboard = (props) => {
  return (
    <div className="warper">
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <div className="col p-3">
            <div className="container m-30">
              <div className="row ">
                {data.map((item, index) => {
                  return (
                    <div className="col-md-4">
                      <Card
                        title={item.section}
                        reference={item.reference}
                        conforme={item.conforme}
                        nonConforme={item.Nconforme}
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
