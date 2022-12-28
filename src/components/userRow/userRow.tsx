import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Person } from '../../shared/assets/svgs';
import { User } from '../../types';
import { Colors } from '../../utils';

interface UserRowProps {
  user: User;
}

export default function UserRow({ user }: UserRowProps) {
  return (
    <View style={styles.container}>
      {user.avatar ? (
        <Image source={{ uri: user.avatar }} />
      ) : (
        <View style={styles.avatar}>
          <Person width={30} height={30} fill="#fff" />
        </View>
      )}
      <Text style={styles.title}>{user.username}</Text>
      <Text style={styles.name}>{user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 60,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
    paddingHorizontal: 20,
    borderRadius: 4,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.FASHION_FUCHSIA,
  },
  name: {
    fontSize: 12,
    color: Colors.PHILIPPINE_GRAY,
    marginLeft: 'auto',
  },
  avatar: {
    borderRadius: 50,
    marginRight: 10,
    backgroundColor: Colors.IGUANA_GREEN,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
