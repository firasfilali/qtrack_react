import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import '../../assets/css/dashboard.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'
import Topbar2 from "../global/Topbar2";




const Dashboard = () => {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <Sidebar />
        <div className="col p-3">
        <Topbar2 />
          <div className="container m-30">
            <div className="row cards ">
              
              <div className="col-md-3" style={{marginTop:'90px'}}>
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
           
              <div className="col-md-3" style={{marginTop:'90px'}}>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Contrôle finale</h5>

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

              <div className="col-md-3" style={{marginTop:'90px'}}>
                <div class="card">
                  <div class="card-body">
                  <h5 class="card-title">Prototype</h5>
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

              

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
