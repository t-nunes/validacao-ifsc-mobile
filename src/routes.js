import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './constants/styles';
import * as screens from './screens';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: styles.headerStyle,
          headerBackTitle: 'Voltar'
        }}
      >
        <Stack.Screen
          name="Home"
          component={screens.ListContacts}
          options={{ title: 'Lista de contatos' }}
        />
        <Stack.Screen
          name="Cadastro"
          component={screens.StoreContact}
          options={{ title: 'Novo Contato' }}
        />
        <Stack.Screen
          name="Detalhes"
          component={screens.Detail}
          options={{ title: 'Detalhes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
