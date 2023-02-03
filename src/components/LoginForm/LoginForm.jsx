import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import * as authService from '../../services/authService'
import { Form, Container, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import * as userService from '../../services/userService'
import { useContext } from 'react'
import { Store } from '../../Store'
import { toast } from 'react-toastify'
import { getError } from '../../services/utils'
import { useEffect } from 'react'

const LoginForm = props => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const { userInfo } = state

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const signinForm = await userService.signin(email, password)
      ctxDispatch({ type: "USER_SIGNIN", payload: signinForm })
      localStorage.setItem('userInfo', JSON.stringify(signinForm))
      navigate(redirect || '/')
    }
    catch(err) {
      toast.error(getError(err))
    }
  }

  useEffect(() => {
    if(userInfo) {
      navigate(redirect)
    }
  }, [navigate, redirect, userInfo])

  return (
    <Container className="small-container">
    <Helmet>
      <title>Sign In</title>
    </Helmet>
    <h1 className="my-3">Sign In</h1>
    <Form onSubmit={submitHandler}>
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