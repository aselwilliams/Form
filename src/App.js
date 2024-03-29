import {useState} from 'react';
import './App.css';
import {Form,Row,Col,FloatingLabel,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser]=useState({firstName:'',lastName:'',email:'', phone:'',password:'',confirmPwd:'', registerCode:'', state: '',avatar:'' })
  const [usersGroup, setUsersGroup] = useState([]);

  const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setUser({...user, [name]: value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(user.firstName && user.lastName && user.email && user.phone && user.password && user.confirmPwd && user.registerCode && user.state){
     const newUser = {...user, id:new Date().getTime().toString()};
     setUsersGroup([...usersGroup, newUser]);
     setUser({firstName:'',lastName:'',email:'', phone:'',password:'',confirmPwd:'', registerCode:'', state: '',avatar:''}) 
    }

  }
  return (
    <div className="container">
<header>
  <h1>Welcome to SEYTECH!</h1>
  <p>In order to register you need a code. Please ask your admin if you don't have it.</p>
</header>
<main>
  <h2>CREATE AN ACCOUNT</h2>
  <Form onSubmit={handleSubmit}>
  <Row className="g-2 mb-4">
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Name *">
      <Form.Control type="text" placeholder="Name *" id='firstName' name='firstName' value={user.firstName} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Last Name *">
      <Form.Control type="text" placeholder="Last Name *" id='lastName' name='lastName' value={user.lastName} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  </Row>

  <Row className="g-2 mb-4">
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Email *">
      <Form.Control type="email" placeholder="Email *"  id='email' name='email' value={user.email} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Phone *">
      <Form.Control type="tel" placeholder="Phone *" id='phone' name='phone' value={user.phone} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  </Row>

  <Row className="g-2 mb-4">
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Password *">
      <Form.Control type="password" placeholder="Password *" id='password' name='password' value={user.password} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Confirm Password *">
      <Form.Control type="password" placeholder="Confirm Password *" id='confirmPwd' name='confirmPwd' value={user.confirmPwd} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  </Row>

  <Row className="g-2 mb-4">
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Register Code *">
      <Form.Control type="text" placeholder="Register Code *" id='registerCode' name='registerCode' value={user.registerCode} onChange={handleChange}/>
    </FloatingLabel>
  </Col>
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingSelectGrid" label="Works with selects">
      <Form.Select aria-label="Floating label select example" id='state' name='state' value={user.state} onChange={handleChange}>
        <option>State *</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
  </Col>
</Row>

<Row className="g-2 mb-4">
  <Col md className='m-3'>
    <FloatingLabel controlId="floatingInputGrid" label="Avatar Url">
      <Form.Control type="url" placeholder="Avatar Url" id='avatar' name='avatar' value={user.avatar}/>
    </FloatingLabel>
  </Col>
</Row>
<Row className='g-2 mb-3 m-2'>
  <Button className='btn btn-secondary'>Register</Button>
  </Row>
  </Form>
  <footer>
    <p>Already have an account?</p>
    <a href='#'>Login</a>
  </footer>
</main>
    </div>
  );
}

export default App;
