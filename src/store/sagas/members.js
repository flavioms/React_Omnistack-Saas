import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import MembersActions from '../ducks/members';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');
    yield put(MembersActions.getMembersSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar seus membros');
  }
}
