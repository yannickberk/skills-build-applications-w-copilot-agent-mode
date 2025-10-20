import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Fetching Teams from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Teams data:', results);
        setTeams(results);
      })
      .catch(error => console.error('Error fetching teams:', error));
  }, [endpoint]);
        return (
          <Card className="mb-4">
            <Card.Body>
              <Card.Title as="h2" className="mb-3">Teams</Card.Title>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Team Name</th>
                    <th>Members</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, idx) => (
                    <tr key={team.id || idx}>
                      <td>{idx + 1}</td>
                      <td>{team.name || JSON.stringify(team)}</td>
                      <td>{team.members ? team.members.length : 'N/A'}</td>
                      <td>
                        <Button variant="primary" size="sm" className="me-2">Edit</Button>
                        <Button variant="danger" size="sm">Delete</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Button variant="success">Add Team</Button>
            </Card.Body>
          </Card>
        );
}
export default Teams;
