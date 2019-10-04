/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectsActions from '~/store/ducks/projects';
import Modal from '~/components/Modal';
import { Container, Project } from './styles';
import Button from '~/styles/components/Button';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects.data);
  const modal = useSelector(state => state.projects.projectModalOpen);
  const [newProject, setNewProject] = useState('');
  const closeModal = () => dispatch(ProjectsActions.closeProjectModal());
  const openModal = () => dispatch(ProjectsActions.openProjectModal());

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
          <Button onClick={openModal}>+ Novo</Button>
          <Button onClick={handleCreateProject}>Membros</Button>
        </div>
      </header>
      {projects.map(project => (
        <Project>
          <p>{project.title}</p>
        </Project>
      ))}

      {modal && (
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
            <Button size="small" color="gray" onClick={closeModal}>
              Cancelar
            </Button>
          </form>
        </Modal>
      )}
    </Container>
  );
}
