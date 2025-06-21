import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f6fa;
`;

const Form = styled.form`
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 320px;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: #007bff;
  text-decoration: underline;
  margin-left: 0.3rem;
  &:hover {
    color: #0056b3;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Preencha todos os campos!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify({ email: user.email, name: user.nome }));
      alert(`Bem-vindo(a), ${user.nome}!`);
      navigate('/');
    } else {
      alert('E-mail ou senha inválidos!');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
        <Footer>
          Não tem uma conta?
          <StyledLink to="/cadastro">Cadastre-se</StyledLink>
        </Footer>
      </Form>
    </Container>
  );
};

export default Login; 