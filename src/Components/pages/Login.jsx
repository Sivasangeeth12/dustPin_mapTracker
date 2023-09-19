import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { newData } from '../FetchData';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {

  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [error, setError] = useState(null);
  const [email , setEmail] = useState('');
  const [password, setPassword] = useState('')

  const emailHandle = (event) =>{
    setEmail(event.target.value);
  }


  const passwordHandle = (event) =>{
    setPassword(event.target.value);
  }

  const handleSubmit = async(e) =>{
     e.preventDefault();
try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user
    console.log("user signed in ", user)
    nav('/main');
    alert("Success");
    }catch(err){
      setError(err.message);
      alert("Invalid");
      console.error('error',err)
    }

    // let count = 0;
    // newData.forEach((item)=>{
    //   if(item.email_id === email && item.password === password){
    //     console.log("login success!!!")
    //     alert('login succes////')
    //   }
    //   else{
    //     count++;
    //   }
    //   if(count == newData.length){
    //     console.error("login failed")
    //   }
    // })
    
    
  }
  return (
    
    <>
    <Button variant='primary' onClick={handleShow}>Login</Button>
    
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton className="bg-body-secondary">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-body-tertiary">
        <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <Form onSubmit={handleSubmit}>
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <FloatingLabel controlId="input" label="Enter Email">
                                 <Form.Control onChange={emailHandle}type="email" value={email} placeholder="Enter email" />
                                 </FloatingLabel>
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <FloatingLabel controlId="password" label="Enter Password">
                                 <Form.Control   onChange={passwordHandle} value={password}type="password" placeholder="Password" />
                                 </FloatingLabel>
                                 </Form.Group>
                                 <Button variant="primary" type="submit">Login</Button>
                           </Form>

                           
                            </div>
                        </div>
                    </div>
        </Modal.Body>
      </Modal>
    </div>
    </>
  )
}
export default Login;