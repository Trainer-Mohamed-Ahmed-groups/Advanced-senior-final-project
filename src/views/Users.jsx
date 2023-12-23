import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function Users() {

    let [users, setUsers] = useState([])
    let [name, setName] = useState("")

    let getUsers = () => {
        fetch("http://localhost:1111/users")
            .then(res => res.json())
            .then(res => setUsers(res))
    }

    let addNewUser = () => {
        fetch("http://localhost:1111/users", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
        }).then(getUsers())
    }

    let deleteUser = (id) => {
        fetch("http://localhost:1111/users/" + id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        }).then(getUsers())
    }

    useEffect(() => {
        getUsers()
    }, [])
    return (
        <div className="text-center tw-mt-4">
            <h2>Users</h2>
            <Form.Group className="mb-3 w-50 mx-auto" controlId="exampleForm.ControlInput1">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" onChange={ev => setName(ev.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={addNewUser}>Add user</Button>
            <hr />
            <ul>
                {
                    users.map(user =>
                        <li key={user.id}>
                            {user.name}
                            <Button
                                variant="danger"
                                className="m-2"
                                onClick={() => deleteUser(user.id)}>Delete</Button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
