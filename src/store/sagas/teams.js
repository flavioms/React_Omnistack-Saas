import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import TeamsAction from '../ducks/teams';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(TeamsAction.getTeamsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar seus times');
  }
}
