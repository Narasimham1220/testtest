
import { useState } from 'react';
import axios from 'axios';

function HomePage() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [results, setResults] = useState([]);

  const searchTrips = async () => {
    const response = await axios.get(`http://localhost:5000/api/trips?from=${from}&to=${to}`);
    setResults(response.data);
  };

  return (
    <div>
      <h1>Search Trips</h1>
      <input type="text" placeholder="From" onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" onChange={(e) => setTo(e.target.value)} />
      <button onClick={searchTrips}>Search</button>

      <ul>
        {results.map(trip => (
          <li key={trip._id}>
            {trip.from} → {trip.to} on {new Date(trip.date).toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
