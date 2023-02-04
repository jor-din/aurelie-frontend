import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./SignupForm.module.css";
import * as authService from "../../services/authService";
import { Container, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import * as userService from '../../services/userService'
import { getError } from "../../services/utils";
import { useEffect } from "react";

const SignupForm = (props) => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      toast.error('Password do not match')
      return
    }
    try {
      const signupForm = await userService.signup(name, email, password)
      ctxDispatch({ type: 'USER_SIGNIN', payload: signupForm })
      localStorage.setItem('userInfo', JSON.stringify(signupForm))
      navigate(redirect || '/')
    }
    catch(err){
      toast.error(getError(err))
    }
  };

  useEffect(() => {
    if(userInfo){
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <Container className="small-container">
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1 className="my-3">Sign Up</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={(e) => setName(e.target.value)} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" required autoComplete="off" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onChange={(e) => setConfirmPassword(e.target.value)} type="password" required autoComplete="off" />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
            Already Have An Accout? {' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignupForm;
