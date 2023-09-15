import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
const Login = () => {
  return (
    
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className="">
        <Modal.Header closeButton className="bg-body-secondary">
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-body-tertiary">
        <div class="container">
                        <div class="row">
                            <div class="col-sm-12">
                            <Form>
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <FloatingLabel controlId="input" label="Enter Email">
                                 <Form.Control type="email" placeholder="Enter email" />
                                 </FloatingLabel>
                                 </Form.Group>
                                 <Form.Group className="mb-3" controlId="formBasicPassword">
                                 <FloatingLabel controlId="password" label="Enter Password">
                                 <Form.Control type="password" placeholder="Password" />
                                 </FloatingLabel>
                                 </Form.Group>
                                 <Button variant="primary" type="submit">Login</Button>
                           </Form>
                            </div>
                        </div>
                    </div>
        </Modal.Body>
      </Modal.Dialog>
    </div>
    
  )
}

export default Login;