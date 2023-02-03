import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import * as authService from '../../services/authService'
import { Form, Container, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import * as userService from '../../services/userService'

const LoginForm = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signup';

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const signinForm = userService.signin(email, password)
    }
    catch(err) {

    }
  }

  return (
    <Container className="small-container">
    <Helmet>
      <title>Sign In</title>
    </Helmet>
    <h1 className="my-3">Sign In</h1>
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <div className="mb-3">
        <Button type="submit">Sign In</Button>
      </div>
      <div className="mb-3">
        New customer?{' '}
        <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
      </div>
    </Form>
  </Container>
  )
}

export default LoginForm