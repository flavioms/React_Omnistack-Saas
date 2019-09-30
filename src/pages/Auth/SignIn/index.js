import React from 'react';

import { Container, SignForm } from '../styles';
import Button from '~/styles/components/Button';

const SignIn = () => (
  <Container>
    <SignForm onSubmit={() => {}}>
      <h1>Boas Vindas</h1>

      <span>E-mail</span>
      <input type="email" name="email" id="email" />

      <span>Senha</span>
      <input type="password" name="password" id="password" />

      <Button size="big" type="submit">Entrar</Button>
    </SignForm>
  </Container>
);

export default SignIn;
