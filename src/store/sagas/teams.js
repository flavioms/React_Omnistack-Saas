import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import TeamsActions from '../ducks/teams';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(TeamsActions.getTeamsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar seus times');
  }
}

export function* createTeam({ name }) {
  try {
    const response = yield call(api.post, 'teams', { name });
    yield put(TeamsActions.closeTeamModal());
    yield put(TeamsActions.createTeamSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao cadastrar time');
  }
}
