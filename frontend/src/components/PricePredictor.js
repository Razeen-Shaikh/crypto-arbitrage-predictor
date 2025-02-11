import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Chart from './Chart';
import LoadingSpinner from './LoadingSpinner';

function PricePredictor() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Axios.get('http://localhost:5000/predict')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching prediction data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1>Price Prediction</h1>
      <Chart data={data} />
    </div>
  );
}

export default PricePredictor;
