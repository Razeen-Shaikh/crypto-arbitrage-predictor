import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import ArbitrageScanner from './components/ArbitrageScanner';
import PricePredictor from './components/PricePredictor';
import Navbar from './components/Navbar';

function App() {
  const [activeTab, setActiveTab] = useState('arbitrage');

  return (
    <div className="App">
      <Navbar setActiveTab={setActiveTab} />
      {activeTab === 'arbitrage' && <ArbitrageScanner />}
      {activeTab === 'predictor' && <PricePredictor />}
    </div>
  );
}

export default App;
