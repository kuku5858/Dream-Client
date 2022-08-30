import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import loginImg from "../header-asset/login.jpg";
import { loginAction } from "../redux/action/userAction";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    loginAction(dispatch, { username, password });
  };

  return (
    <LoginContainer>
      <FormContainer>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={loading}>
            Login
          </Button>
          {/* {error && <Error> Ooops, something went wrong... </Error>} */}
          <TermCondition>
            <ALink to="/">Forgot password?</ALink>
            <br />
            Don't have an account?{" "}
            <ALink to="/register">Create an account</ALink>
          </TermCondition>
        </Form>
      </FormContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${loginImg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`;

const FormContainer = styled.div`
  width: 30%;
  padding: 1.75rem;
  background-color: #eeeeee;
  /* ================= Media Queries (Medium Devices) ===================*/

  @media screen and (max-width: 1024px) {
    width: 60%;
  }

  /* ================= Media Queries (Small Devices) ===================*/

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 1.25rem 0.625rem 0 0;
  padding: 0.625rem;
  border: 0.2px solid var(--color-gold);
  font-size: 0.9rem;
`;

const Button = styled.button`
  background: var(--color-primary-profile);
  color: var(--color-baige);
  margin-top: 1rem;
  width: max-content;
  display: inline-block;
  padding: 0.75rem 2.9rem;
  border-radius: 0.4rem;
  cursor: pointer;
  border: 1px solid var(--color-primary-profile);
  transition: var(--transition);

  &:hover {
    background-color: var(--color-baige-variant);
    color: var(--color-primary-profile);
  }

  &:disabled {
    background-color: var(--color-baige-variant);
    cursor: disabled;
  }
`;

const TermCondition = styled.p`
  font-size: 0.9rem;
  margin: 1.25rem 0;
`;

const ALink = styled(Link)`
  color: grey;
  margin: 0.25rem 0;
  text-decoration: underline;
`;

// const Error = styled.span`
//   color: red;
//   font-size: 0.8rem;
// `;

export default Login;
