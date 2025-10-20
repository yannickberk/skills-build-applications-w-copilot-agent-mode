import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const ACTIVITIES_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`; // This line is kept for reference

function Activities() {
  const [activities, setActivities] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Fetching Activities from:', endpoint); // This line is kept for reference
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Activities data:', results);
        setActivities(results);
      })
      .catch(error => console.error('Error fetching activities:', error));
  }, [endpoint]);

      return (
        <Card className="mb-4">
          <Card.Body>
            <Card.Title as="h2" className="mb-3">Activities</Card.Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Activity</th>
                  <th>Date</th>
                  <th>Duration</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{activity.name || JSON.stringify(activity)}</td>
                    <td>{activity.date || 'N/A'}</td>
                    <td>{activity.duration || 'N/A'}</td>
                    <td>
                      <Button variant="primary" size="sm" className="me-2">Edit</Button>
                      <Button variant="danger" size="sm">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button variant="success">Add Activity</Button>
          </Card.Body>
        </Card>
      );
}

export default Activities;
