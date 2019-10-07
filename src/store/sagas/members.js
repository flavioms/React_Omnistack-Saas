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

export function* updateMember({ id, roles }) {
  try {
    yield call(api.put, `members/${id}`, { roles: roles.map(role => role.id) });
    toast.success('Membro atualizado');
  } catch (error) {
    toast.error('Falha ao buscar seus membros');
  }
}
