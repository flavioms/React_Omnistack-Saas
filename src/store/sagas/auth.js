import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@Omni:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
  } catch (error) {
    toast.error('Falha no Login, verifique seu e-mail/senha');
  }
}
