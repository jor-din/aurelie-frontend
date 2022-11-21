import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'
import { Container, Form, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const SignupForm = props => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState({})

  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData, photoData.photo)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <Container className='small-container'>
    <Helmet>
      <title>Sign Up</title>
    </Helmet>
    <h1 className="my-3">Sign Up</h1>

    <Form>
    <Form.Group className="mb-3" controlId="email">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required autoComplete='off'/>
      </Form.Group>
      <div className="mb-3">
        <Button type="submit">Sign Up</Button>
      </div>
      
    </Form>
    {/* <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles.label}>Name</label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className={styles.label}>
          Confirm Password
        </label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className={styles.button}>
          Sign Up
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form> */}
  </Container>
  )
}

export default SignupForm