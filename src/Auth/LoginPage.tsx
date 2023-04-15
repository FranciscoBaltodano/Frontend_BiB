import * as React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { onLogin } from './auth.api';
import { setDefaultResultOrder } from 'dns';

interface ILoginPageProps {
}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    
    
    const [{username, password}, setCredentials] = useState({
        username:"",
        password:""  })

    const [error, setError] = useState('');
    
    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await onLogin({
            username,
            password
        })

        if (response && response.error) {
            setError(response.error);
        }
        
    }
    
    return (
        <Form onSubmit={login} style={{ 
        width: '25%',
        display:"flex",
        alignItems:"center", 
        flexDirection:"column", 
        margin:"0 auto"}}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor='username'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={username} onChange={(event) => setCredentials({
                    username: event.target.value,
                    password
                    })} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={ (event) => setCredentials({
                    username,
                    password: event.target.value
                })}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            {error.length> 0  && <p>{error}</p>}
        </Form>
    );
};

export default LoginPage;
