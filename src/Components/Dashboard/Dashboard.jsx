import React from "react";
import AmountChart from "./AmountComponent/Amount";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <div className="main__dashboard">
        <div className="main__dashboard__heading"></div>
        <div className="main__dashboard-content">
          <div className="dashboard-content__left"></div>
          <div className="dashboard-content__right">
            <div className="dashboard-content__right-up">
              <AmountChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
