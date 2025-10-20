import React, { useEffect, useState } from 'react';
import { Table, Button, Card } from 'react-bootstrap';

const USERS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
    const endpoint = `https://${codespaceName}-8000.app.github.dev/api/users/`;
    console.log('Fetching Users from:', endpoint);
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        console.log('Users data:', results);
        setUsers(results);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);
  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Users</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{idx + 1}</td>
                <td>{user.username || JSON.stringify(user)}</td>
                <td>{user.email || 'N/A'}</td>
                <td>
                  <Button variant="primary" size="sm" className="me-2">Edit</Button>
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button variant="success">Add User</Button>
      </Card.Body>
    </Card>
  );
}

export default Users;
