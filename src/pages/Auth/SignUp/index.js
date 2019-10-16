import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthActions from '~/store/ducks/auth';
import { Container, SignForm } from '../styles';
import Button from '~/styles/components/Button';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(AuthActions.signUpRequest(name, email, password));
  };
  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Criar conta</h1>

        <span>Nome</span>
        <input
          name="name"
          id="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <span>E-mail</span>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <span>Senha</span>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Button size="big" type="submit">
          Cadastrar
        </Button>
      </SignForm>
    </Container>
  );
}
