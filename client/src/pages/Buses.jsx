import { useState } from 'react';
import { FaBus } from 'react-icons/fa';
import '../styles/Dashboard.css';

const Buses = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard-header">
          <FaBus className="dashboard-icon" style={{ fontSize: '64px', marginBottom: '20px' }} />
          <h1>Bus Travel</h1>
          <p>Bus travel management coming soon</p>
        </div>
      </div>
    </div>
  );
};

export default Buses;

