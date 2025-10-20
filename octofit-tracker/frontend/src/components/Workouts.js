import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    console.log('Fetching Workouts from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Workouts data:', results);
        setWorkouts(results);
      })
      .catch(error => console.error('Error fetching workouts:', error));
  }, [endpoint]);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Workouts</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Workout</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={workout.id || idx}>
                <td>{idx + 1}</td>
                <td>{workout.name || JSON.stringify(workout)}</td>
                <td>{workout.type || 'N/A'}</td>
                <td>{workout.duration || 'N/A'}</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add Workout</Button>
      </Card.Body>
    </Card>
  );
}

export default Workouts;
