import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching Leaderboard from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Leaderboard data:', results);
        setLeaderboard(results);
      })
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Leaderboard</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {/* Example row */}
            <tr>
              <td>1</td>
              <td>Alice</td>
              <td>1200</td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Leaderboard;
