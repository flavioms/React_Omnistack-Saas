/* eslint-disable import/no-named-as-default-member */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamsActions from '~/store/ducks/teams';
import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import { Container, TeamList, Team, NewTeam } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams.data);
  const modal = useSelector(state => state.teams.teamModalOpen);

  useEffect(() => {
    dispatch(TeamsActions.getTeamsRequest());
  }, [dispatch]);

  const handleTeamSelect = team => {
    dispatch(TeamsActions.selectTeam(team));
  };

  const openModal = () => dispatch(TeamsActions.openTeamModal());
  const closeModal = () => dispatch(TeamsActions.closeTeamModal());

  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team key={team.id} onClick={handleTeamSelect(team)}>
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
            <form onSubmit={() => {}}>
              <span>Nome</span>
              <input name="newTeam" />

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
    </Container>
  );
}
