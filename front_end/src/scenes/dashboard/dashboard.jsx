import { Box } from "@mui/material";
import React from "react";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";
import '../../assets/css/dashboard.css'
import up from '../../assets/up.png'
import down from '../../assets/down.png'


const Card = (props) => {
  return(

    <div {...props} className="col-md-4">
                <div class="card w-60 mx-auto mb-5">
                  <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                  
                    <p class="card-text mt-5">
                      Référence
                    </p>
                    <p>{props.reference}</p>
                   <div className="row mt-5">
                    <div className="col" style={{textAlign:'center'}}><p className="up">+{props.conforme}%</p><img src={up} width="50%" /></div>
                    <div className="col" style={{textAlign:'center'}}><p className="down">-{props.nonConforme}%</p><img src={down} width="50%"/></div>
                   </div>
                  </div>
                </div>
              </div>

  )
}
const data = [{
  id: 0,
  section: 'Controle à la chaine',
  reference: 'A200',
  conforme: '4.15',
  Nconforme: '2.15'
},
{
  id: 1,
  section: 'Controle à la chaine',
  reference: 'A300',
  conforme: '4.15',
  Nconforme: '2.15'
},
{
  id: 2,
  section: 'Controle à la chaine',
  reference: 'A200',
  conforme: '4.15',
  Nconforme: '2.15'
},
{
  id: 3,
  section: 'Controle à la chaine',
  reference: 'A200',
  conforme: '4.15',
  Nconforme: '2.15'
},
{
  id: 4,
  section: 'Controle à la chaine',
  reference: 'A200',
  conforme: '4.15',
  Nconforme: '2.15'
},
{
  id: 5,
  section: 'Controle à la chaine',
  reference: 'A200',
  conforme: '4.15',
  Nconforme: '2.15'
},
]

const Dashboard = (props) => {
  return (
    <div className="warper">
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div className="col p-3">
          <div className="container m-30">
            <div className="row ">
              {data.map ((item, index) => {return (
                

                  <Card title={item.section} reference={item.reference} conforme={item.conforme} nonConforme={item.Nconforme} key={item.id}
                  onClick={() => console.log("hello")} />
                  
              )} 

               ) }
           
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
