import React from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import './adminpage.css';

export default class AdminPage extends React.Component {
    render() {
        return (
            <>
                <h1>Admin Panel</h1>
                <p>
                    Here you can change the ranks of signed up students,
                    teachers and assistants.
                </p>
                {!this.props.users ? (
                    'Loading...'
                ) : (
                    <>
                        <h3>Users list</h3>
                        <Table className="users-list" striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Current rank</th>
                                    <th>Change rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users.map(user => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td> {user.name}</td>
                                            <td>{user.email}</td>
                                            {user.rank === 0 && (
                                                <td>Unauthorized</td>
                                            )}
                                            {user.rank === 1 && (
                                                <td>Student</td>
                                            )}
                                            {user.rank === 2 && (
                                                <td>Assistant</td>
                                            )}
                                            {user.rank === 3 && (
                                                <td>Teacher</td>
                                            )}
                                            {user.rank === 4 && <td>Admin</td>}
                                            <td>
                                                <form
                                                    onSubmit={
                                                        this.props.onSubmit
                                                    }
                                                    data-user_id={user.id}
                                                    id="rank"
                                                >
                                                    <Form.Group
                                                        inline
                                                        controlId="select-user-rank"
                                                    >
                                                        <Form.Control
                                                            as="select"
                                                            value={
                                                                this.props.rank
                                                            }
                                                            onChange={
                                                                this.props
                                                                    .onChange
                                                            }
                                                            name="rank"
                                                        >
                                                            <option value="1">
                                                                1 - Student
                                                            </option>
                                                            <option value="2">
                                                                2 - Assistant
                                                            </option>
                                                            {this.props
                                                                .currentUser
                                                                .rank > 4 && (
                                                                <>
                                                                    <option value="3">
                                                                        3 -
                                                                        Teacher
                                                                    </option>
                                                                    <option value="4">
                                                                        4 -
                                                                        Admin
                                                                    </option>
                                                                </>
                                                            )}
                                                        </Form.Control>
                                                        <Button
                                                            type="submit"
                                                            variant="danger"
                                                        >
                                                            Change rank
                                                        </Button>
                                                    </Form.Group>
                                                </form>
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
}
