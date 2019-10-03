/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/no-named-as-default-member */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamsActions from '~/store/ducks/teams';
import AuthActions from '~/store/ducks/auth';
import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import { Container, TeamList, Team, NewTeam, Logout } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams.data);
  const modal = useSelector(state => state.teams.teamModalOpen);
  const [newTeam, setNewTeam] = useState('');

  useEffect(() => {
    dispatch(TeamsActions.getTeamsRequest());
  }, [teams]);

  const handleTeamSelect = team => {
    dispatch(TeamsActions.selectTeam(team));
  };

  const handleCreateTeam = e => {
    e.preventDefault();
    dispatch(TeamsActions.createTeamRequest(newTeam));
  };

  const openModal = () => dispatch(TeamsActions.openTeamModal());
  const closeModal = () => dispatch(TeamsActions.closeTeamModal());
  const logOut = () => dispatch(AuthActions.signOut());

  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team key={team.id} onClick={() => handleTeamSelect(team)}>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${team.name}`}
              alt={team.name}
            />
          </Team>
        ))}
        <NewTeam onClick={openModal}>Novo</NewTeam>
        {modal && (
          <Modal>
            <h1>Criar time</h1>
            <form onSubmit={handleCreateTeam}>
              <span>Nome</span>
              <input
                name="newTeam"
                value={newTeam}
                onChange={e => setNewTeam(e.target.value)}
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
      </TeamList>
      <Logout onClick={logOut}>SAIR</Logout>
    </Container>
  );
}
