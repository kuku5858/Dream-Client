import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import registerImg from "../header-asset/register.jpg";
import { registerAction } from "../redux/action/userAction";

function Register() {
  const [newUser, setNewUser] = useState({});
  const [confirmPW, setConfirmPW ] = useState("");

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleInput = (e) => {
    setNewUser((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if(confirmPW === newUser.password) {
      registerAction(dispatch, newUser);

    navigate("/login");
    } else {
      window.location.reload();
    }
    
  };

  return (
    <RegisterContainer>
      <FormContainer>
        <Title>Create An Account</Title>
        <Form>
          <Input placeholder="First Name" name="firstName" type="text" onChange={handleInput} />
          <Input placeholder="Last Name" name="lastName" type="text" onChange={handleInput} />
          <Input placeholder="Username" name="username" type="text" onChange={handleInput} />
          <Input placeholder="Email" name="email" type="email" onChange={handleInput} />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleInput}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) => setConfirmPW(e.target.value)}
          />
          <TermCondition>
            *By creating an account. I consent to the process of my personal
            data and agree to company's terms and conditions.
          </TermCondition>
          <button className="btn btn-primary" onClick={handleRegister}>
            Create
          </button>
        </Form>
      </FormContainer>
    </RegisterContainer>
  );
}

const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${registerImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormContainer = styled.div`
  width: 40%;
  padding: 1.25rem;
  background-color: #eeeeee;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  /* ================= Media Queries (Small Devices) ===================*/

  @media screen and (max-width: 600px) {
    width: 95%;
  }

`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
  border: 0.2px solid var(--color-gold);
  font-size: 0.9rem;
`;

const TermCondition = styled.span`
  font-size: 0.8rem;
  margin: 1.25rem 0;
`;

export default Register;
