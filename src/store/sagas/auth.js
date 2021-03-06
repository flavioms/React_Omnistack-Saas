import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import AuthActions from '../ducks/auth';
import history from '~/services/history';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });
    localStorage.setItem('@Omni:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    history.push('/');
  } catch (error) {
    toast.error('Falha no Login, verifique seu e-mail/senha');
  }
}

export function* signOut() {
  try {
    localStorage.removeItem('@Omni:token');
    localStorage.removeItem('@Omni:team');
    yield history.push('/signin');
  } catch (error) {
    toast.error('Falha no Login, verifique seu e-mail/senha');
  }
}

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, 'users', { name, email, password });
    localStorage.setItem('@Omni:token', response.data.token);
    yield put(AuthActions.signInSuccess(response.data.token));
    history.push('/');
  } catch (error) {
    toast.error('Falha no Cadastro, Você foi convidado para algum time?');
  }
}

export function* getPermissions() {
  const team = yield select(state => state.teams.active);
  const signedIn = yield select(state => state.auth.signedIn);

  if (!team || !signedIn) return;

  const response = yield put(api.get, 'permissions');
  const { roles, permissions } = response.data;
  yield put(AuthActions.getPermissionsSuccess(roles, permissions));
}
