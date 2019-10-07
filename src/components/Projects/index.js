/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectsActions from '~/store/ducks/projects';
import MembersActions from '~/store/ducks/members';
import Modal from '~/components/Modal';
import { Container, Project } from './styles';
import Button from '~/styles/components/Button';
import Members from '~/components/Members';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects.data);
  const modalProject = useSelector(state => state.projects.projectModalOpen);
  const modalMembers = useSelector(state => state.members.membersModalOpen);
  const [newProject, setNewProject] = useState('');

  const closeProjectModal = () => dispatch(ProjectsActions.closeProjectModal());
  const openProjectModal = () => dispatch(ProjectsActions.openProjectModal());
  const openMembersModal = () => dispatch(MembersActions.openMembersModal());

  const handleCreateProject = e => {
    e.preventDefault();
    dispatch(ProjectsActions.createProjectRequest(newProject));
  };

  useEffect(() => {
    dispatch(ProjectsActions.getProjectsRequest());
  }, [activeTeam]);

  if (!activeTeam) return null;
  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={openProjectModal}>+ Novo</Button>
          <Button onClick={openMembersModal}>Membros</Button>
        </div>
      </header>
      {projects.map(project => (
        <Project>
          <p>{project.title}</p>
        </Project>
      ))}

      {modalProject && (
        <Modal>
          <h1>Criar Projeto</h1>
          <form onSubmit={handleCreateProject}>
            <span>Titulo</span>
            <input
              name="titulo"
              value={newProject}
              onChange={e => setNewProject(e.target.value)}
            />

            <Button type="submit" size="big">
              Salvar
            </Button>
            <Button size="small" color="gray" onClick={closeProjectModal}>
              Cancelar
            </Button>
          </form>
        </Modal>
      )}

      {modalMembers && <Members />}
    </Container>
  );
}
