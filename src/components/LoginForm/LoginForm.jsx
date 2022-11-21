import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import * as authService from '../../services/authService'
import { Form, Container, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const LoginForm = props => {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   pw: '',
  // })
  // const navigate = useNavigate()

  // const handleChange = e => {
  //   props.updateMessage('')
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  // }

  // const handleSubmit = async evt => {
  //   evt.preventDefault()
  //   try {
  //     await authService.login(formData)
  //     props.handleSignupOrLogin()
  //     navigate('/')
  //   } catch (err) {
  //     props.updateMessage(err.message)
  //   }
  // }
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/signup';
  return (
    // <form
    //   autoComplete="off"
    //   onSubmit={handleSubmit}
    //   className='login-container'
    // >
    //   <div className='login-inputContainer'>
    //     <label htmlFor="email" className='login-label'>Email</label>
    //     <input
    //       type="text"
    //       autoComplete="off"
    //       id="email"
    //       value={formData.email}
    //       name="email"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div className='login-inputContainer' >
    //     <label htmlFor="password" className='login-label'>Password</label>
    //     <input
    //       type="password"
    //       autoComplete="off"
    //       id="password"
    //       value={formData.pw}
    //       name="pw"
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div>
    //     <button className='login-button'>Log In</button>
    //     <Link to="/cart">
    //       <button>Cancel</button>
    //     </Link>
    //   </div>
    // </form>
    <Container className="small-container">
    <Helmet>
      <title>Sign In</title>
    </Helmet>
    <h1 className="my-3">Sign In</h1>
    <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required />
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