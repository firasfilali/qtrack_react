import React from "react";
import "../../assets/css/dashboard.css";
import Card from "../../components/cards/card";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";


const fetchData = async () => {
  const response = await fetch("http://localhost:3030/posts");
  const data = await response.json();
  return data;
  
};



const Dashboard = (props) => {

  const {data, isLoading} = useQuery({
    queryKey: ["stats"],
    queryFn: function() {
      return fetchData();
    },
  });

  if (isLoading) {
    return <div>loading ......</div>
  }

  return (
    <div style={{marginTop: "20px", height:"80vh"}}>
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
