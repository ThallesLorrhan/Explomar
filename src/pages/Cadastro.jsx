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
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #218838;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const StyledLink = styled(Link)`
  color: #28a745;
  text-decoration: underline;
  margin-left: 0.3rem;
  &:hover {
    color: #218838;
  }
`;

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome || !email || !password) {
      alert('Preencha todos os campos!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
      alert('E-mail já cadastrado!');
      return;
    }

    const newUser = { nome, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Cadastro realizado com sucesso!');
    navigate('/login');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
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
        <Button type="submit">Cadastrar</Button>
        <Footer>
          Já tem uma conta?
          <StyledLink to="/login">Entrar</StyledLink>
        </Footer>
      </Form>
    </Container>
  );
};

export default Cadastro; 