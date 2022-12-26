import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import UserRow from '../../components/userRow/userRow';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectUsers } from '../../store';
import { getUsers } from '../../store/users/actions';

export default function UsersScreen() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <SafeAreaView>
      <ScrollView>
        {users.map(user => (
          <UserRow user={user} key={user.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
