import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';

import DocumentTitle from '../DocumentTitle/DocumentTitle';

import './userslist.css';

export default function UsersList(props) {
  return (
    <>
      <DocumentTitle title='Admin Panel' />
      <h1>Users List</h1>
      <p>
        Here you can change the ranks of signed up students, teachers and
        assistants.
      </p>
      {!props.users ? (
        'Loading...'
      ) : (
        <>
          <h3>Unauthorized users</h3>
          {props.unauthorizedUsers.length < 1 && (
            <p>There are no unauthorized users at the moment.</p>
          )}
          {props.unauthorizedUsers.length > 0 && (
            <Table className='users-list' striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Current rank</th>
                  <th>Change rank</th>
                </tr>
              </thead>
              <tbody>
                {props.unauthorizedUsers.map(user => {
                  return (
                    <tr key={user.id}>
                      <td> {user.name}</td>
                      <td>{user.email}</td>
                      {user.rank === 0 && <td>Unauthorized</td>}
                      {user.rank === 1 && <td>Student</td>}
                      {user.rank === 2 && <td>Assistant</td>}
                      {user.rank === 3 && <td>Teacher</td>}
                      {user.rank === 4 && <td>Admin</td>}
                      <td>
                        <Form
                          onSubmit={props.onSubmit}
                          data-user_id={user.id}
                          id='rank'
                        >
                          <Form.Group inline controlId='select-user-rank'>
                            <Form.Control
                              as='select'
                              value={props.rank}
                              onChange={props.onChange}
                              name='rank'
                            >
                              <option>pick a rank</option>
                              <option value='0'>0 - Unauthorized</option>
                              <option value='1'>1 - Student</option>
                              <option value='2'>2 - Assistant</option>
                              {props.currentUser.rank === 4 && (
                                <>
                                  <option value='3'>3 - Teacher</option>
                                  <option value='4'>4 - Admin</option>
                                </>
                              )}
                            </Form.Control>
                            <Button type='submit' variant='danger'>
                              Change rank
                            </Button>
                          </Form.Group>
                        </Form>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}

          <h3>All users</h3>
          <Table className='users-list' striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Current rank</th>
                <th>Change rank</th>
              </tr>
            </thead>
            <tbody>
              {props.users.map(user => {
                return (
                  <tr key={user.id}>
                    <td> {user.name}</td>
                    <td>{user.email}</td>
                    {user.rank === 0 && <td>Unauthorized</td>}
                    {user.rank === 1 && <td>Student</td>}
                    {user.rank === 2 && <td>Assistant</td>}
                    {user.rank === 3 && <td>Teacher</td>}
                    {user.rank === 4 && <td>Admin</td>}
                    <td>
                      {user.rank < props.currentUser.rank && (
                        <Form
                          onSubmit={props.onSubmit}
                          data-user_id={user.id}
                          id='rank'
                        >
                          <Form.Group inline controlId='select-user-rank'>
                            <Form.Control
                              as='select'
                              value={props.rank}
                              onChange={props.onChange}
                              name='rank'
                            >
                              <option>pick a rank</option>
                              <option value='0'>0 - Unauthorized</option>
                              <option value='1'>1 - Student</option>
                              <option value='2'>2 - Assistant</option>
                              {props.currentUser.rank === 4 && (
                                <>
                                  <option value='3'>3 - Teacher</option>
                                  <option value='4'>4 - Admin</option>
                                </>
                              )}
                            </Form.Control>
                            <Button type='submit' variant='danger'>
                              Change rank
                            </Button>
                          </Form.Group>
                        </Form>
                      )}{' '}
                      {user.rank >= props.currentUser.rank && (
                        <p>You cannot change this user's rank.</p>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
