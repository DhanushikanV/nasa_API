import React, { useState } from 'react';

export default function Asteroid() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [asteroids, setAsteroids] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showTable, setShowTable] = useState(false); // State to track if table should be displayed

  const handleSubmit = () => {
    // Validate start date and end date
    if (!startDate || !endDate) {
      alert('Please enter both start date and end date.');
      return;
    }

    setLoading(true);

    const fetchAsteroids = async () => {
      try {
        const apiKey = 'WcS6o09hGpHUcrgp2AvmWdHRsj2Vlc4GKkd1Zbyr';
        const apiUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        const asteroidData = Object.values(data?.near_earth_objects ?? {}).flat();
        setAsteroids(asteroidData);
        setLoading(false);
        setShowTable(true); // Show the table after fetching data
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchAsteroids();
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '5%' , color: 'white'}}>Asteroids</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '10px', borderRadius: '10px' }}>
          <label style={{ color: 'black', fontSize: '1.2em', marginRight: '5px', color: 'white' }}>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ borderRadius: '5px', padding: '4px' }} />
        </div>
        <div style={{ marginRight: '10px', borderRadius: '10px' }}>
          <label style={{ color: 'black', fontSize: '1.2em', marginRight: '5px' ,  color: 'white'}}>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ borderRadius: '5px', padding: '4px' }} />
        </div>
        <button onClick={handleSubmit} style={{ fontSize: '1.2em', borderRadius: '10px', backgroundColor: 'lightBlue', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>Search</button>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      
      {showTable && ( // Conditionally render the table based on showTable state
        <div style={{ textAlign: 'center', padding: '10px' }}>
          <table style={{ margin: '0 auto', backgroundColor: 'white', borderCollapse: 'collapse', width: '80%' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: 'lightblue' }}>Name</th>
                <th style={{ border: '1px solid black', padding: '8px', textAlign: 'left', backgroundColor: 'lightblue' }}>Estimated Diameter (km)</th>
              </tr>
            </thead>
            <tbody>
              {asteroids.map((asteroid, index) => (
                <tr key={index}>
                  <td style={{ border: '1px solid black', padding: '8px', backgroundColor: index % 2 === 0 ? '#f2f2f2' : 'white', textAlign: 'left' }}>{asteroid.name}</td>
                  <td style={{ border: '1px solid black', padding: '8px', textAlign: 'left' }}>{asteroid.estimated_diameter?.kilometers?.estimated_diameter_max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
