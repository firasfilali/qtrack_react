import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import '../../assets/css/dashboard.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
const Dashboard = () => {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <div className="col p-0">
        <Topbar></Topbar>
          <div className="container   m-30">
            <div className="row cards ">
              
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Contrôle à la chaine</h5>
                  
                    <p class="card-text mt-5">
                      Référence
                    </p>
                    <p>A100</p>
                   <div className="row mt-5">
                    <div className="col" style={{textAlign:'center'}}><p className="up">+3.48%</p><img src={up} width="50%" /></div>
                    <div className="col" style={{textAlign:'center'}}><p className="down">-3.48%</p><img src={down} width="50%"/></div>
                   </div>
                  </div>
                </div>
              </div>
           
              <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            <div className="col-md-3">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="card-link">
                      Card link
                    </a>
                    <a href="#" class="card-link">
                      Another link
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
