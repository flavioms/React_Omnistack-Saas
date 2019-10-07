/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import api from '~/services/api';
import MembersActions from '~/store/ducks/members';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList, Invite } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const [listRoles, setListRoles] = useState([]);
  const [invite, setInvite] = useState('');
  const members = useSelector(state => state.members.data);
  const closeMembersModal = () => dispatch(MembersActions.closeMembersModal());

  async function getRoles() {
    const response = await api.get('roles');
    setListRoles(response.data);
  }

  const handleRolesChange = (id, roles) => {
    dispatch(MembersActions.updateMemberRequest(id, roles));
  };

  const handleInvite = e => {
    e.preventDefault();
    dispatch(MembersActions.inviteMemberRequest(invite));
  };

  useEffect(() => {
    dispatch(MembersActions.getMembersRequest());
    getRoles();
  }, []);

  return (
    <Modal>
      <h1>Membros</h1>
      <Invite onSubmit={handleInvite}>
        <input
          name="invite"
          placeholder="Convidar para o time"
          value={invite}
          onChange={e => setInvite(e.target.value)}
        />
        <Button type="submit">Enviar</Button>
      </Invite>
      <form>
        <MembersList>
          {members.map(member => (
            <li key={String(member.id)}>
              <strong>{member.user.name}</strong>
              <Select
                isMulti
                options={listRoles}
                value={member.roles}
                getOptionLabel={role => role.name}
                getOptionValue={role => role.id}
                onChange={value => handleRolesChange(member.id, value)}
              />
            </li>
          ))}
        </MembersList>
        <Button onClick={closeMembersModal} filled={false} color="gray">
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}
