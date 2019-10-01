import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamsActions from '~/store/ducks/teams';
import { Container, TeamList, Team } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams.data);

  useEffect(() => {
    dispatch(TeamsActions.getTeamsRequest());
  }, [dispatch]);

  return (
    <Container>
      <TeamList>
        {teams.map(team => (
          <Team>
            <img
              src={`https://ui-avatars.com/api/?font-size=0.33&background=7159C1&color=fff&name=${team.name}`}
              alt={team.name}
            />
          </Team>
        ))}
      </TeamList>
    </Container>
  );
}
