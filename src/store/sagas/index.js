import { all, takeLatest } from 'redux-saga/effects';
import { TeamsTypes } from '../ducks/teams';
import { AuthTypes } from '../ducks/auth';
import { signIn } from './auth';
import { getTeams } from './teams';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
  ]);
}
