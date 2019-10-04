/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectsActions from '~/store/ducks/projects';
import { Container, Project } from './styles';
import Button from '~/styles/components/Button';

export default function Projects() {
  const dispatch = useDispatch();
  const activeTeam = useSelector(state => state.teams.active);
  const projects = useSelector(state => state.projects.data);
  if (!activeTeam) return null;

  useEffect(() => {
    dispatch(ProjectsActions.getProjectsRequest());
  }, [activeTeam]);

  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button onClick={() => {}}>+ Novo</Button>
          <Button onClick={() => {}}>Membros</Button>
        </div>
      </header>
      {projects.map(project => (
        <Project>
          <p>{project.title}</p>
        </Project>
      ))}
    </Container>
  );
}
