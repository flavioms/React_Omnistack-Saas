import { call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');
    yield put(ProjectsActions.getProjectsSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao buscar seus times');
  }
}

export function* createProject({ title }) {
  try {
    const response = yield call(api.post, 'projects', { title });
    yield put(ProjectsActions.createProjectSuccess(response.data));

    yield put(ProjectsActions.closeProjectModal());
  } catch (error) {
    toast.error('Falha ao cadastrar projeto');
  }
}
