/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MembersActions from '~/store/ducks/members';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';
import { MembersList } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members.data);
  const closeMembersModal = () => dispatch(MembersActions.closeMembersModal());

  useEffect(() => {
    dispatch(MembersActions.getMembersRequest());
  }, [members]);

  return (
    <Modal>
      <h1>Membros</h1>
      <form>
        <MembersList>
          {members.map(member => (
            <li key={String(member.id)}>
              <strong>{member.user.name}</strong>
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
