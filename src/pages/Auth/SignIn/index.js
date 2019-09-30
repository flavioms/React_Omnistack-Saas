import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthActions from '~/store/ducks/auth';
import { Container, SignForm } from '../styles';
import Button from '~/styles/components/Button';

export default function SignIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(AuthActions.signInRequest(email, password));
  };
  return (
    <Container>
      <SignForm onSubmit={handleSubmit}>
        <h1>Boas Vindas</h1>

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
          Entrar
        </Button>
      </SignForm>
    </Container>
  );
}
