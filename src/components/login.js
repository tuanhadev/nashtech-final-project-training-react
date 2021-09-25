import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Login() {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const updateAPIData = () => {
        axios.get(`https://60dff0ba6b689e001788c858.mockapi.io/token`).then(() => {
            localStorage.setItem("email", email);
            setTimeout(() => {
                history.push('/posts')
            }, 500)
            setTimeout(() => {
                window.location.reload();
            }, 1000)
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Email</label>
                    <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    {!email && <p style={{ color: "red" }}>Required</p>}
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    {password.length < 8 && <p style={{ color: "red" }}>At least 8 characters</p>}
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Login</Button>
            </Form>
        </div>
    )
}
