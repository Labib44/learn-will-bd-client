import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [error, setError]=useState('');
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const from=location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handealGoogle = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace:true});
            })
            .catch(error => console.error(error))
    }

    const handleSigin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace:true});
        })
        .catch(error=> {
            console.error(error)
            setError(error.message);
        })

    }


    return (
        <div className='m-3'>
            <Form onSubmit={handleSigin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger ms-5">
                    {error}
                </Form.Text>
                <br />
                <ButtonGroup >
                    <Button onClick={handealGoogle} className='m-2' variant="outline-success"><FaGoogle className='me-2'></FaGoogle> Login with Google</Button>
                    <Button className='m-2' variant="outline-primary"><FaGithub className='me-2'></FaGithub> Login with GitHub</Button>
                    <Button className='m-2' variant="outline-primary"><FaFacebook></FaFacebook> Login with Facbook</Button>

                </ButtonGroup>
                <p>Don't have an account ?<Link to='/register'>Click hare</Link> </p>
            </Form>
        </div>
    );
};

export default Login;