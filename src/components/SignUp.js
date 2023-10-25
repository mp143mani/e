import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  let handleSignup = async (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);

    let data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      mobile: e.target.mobile.value,
    };
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signup`,
        data
      );
      if (res.status === 200) {
        toast.success(res.data.message);
        navigate("/sign-in");
      }
    } catch (error) {
      toast.error(error.response.data.error || error.response.data.message);
    }
    // console.log(data)
  };
  return (
    <div className="container ">
      <h1 className="title">Signup</h1>
      <div className="signup-wrapper">
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name"
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter the mobile no"
              name="mobile"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
