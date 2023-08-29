import React, { useEffect } from "react";
import "../../assets/css/dashboard.css";
import Card from "../../components/cards/card";
import { Row } from "react-bootstrap";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import {
  getDashboardStatus,
  fetchDashboard,
} from "../../features/managment/dashboardSlice";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const {entities = [], loading, error} = useSelector((state) => state.data || {});
 

  useEffect(() => {
    
      dispatch(fetchDashboard());
    
  }, [dispatch]);

  if (loading === 'pending') return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  return (
    <div style={{ marginTop: "20px", height: "80vh" }}>
      <Row>
        {entities.map((item, index) => {
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
