import React from 'react';
import { UsersScreen, TodosScreen } from '../screens';
import { StyleSheet, View } from 'react-native';
import { Todos, Users } from '../shared/assets/svgs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.iconContainer}>
              <Users
                width={30}
                height={30}
                fill={focused ? color : '#f876eb'}
              />
            </View>
          ),
          tabBarIconStyle: { alignSelf: 'center', flex: 1 },
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name="Todos"
        component={TodosScreen}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <View style={styles.iconContainer}>
              <Todos
                width={30}
                height={30}
                fill={focused ? color : '#f876eb'}
              />
            </View>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#7bdef7',
  },
  iconContainer: {
    paddingLeft: 5,
  },
});
