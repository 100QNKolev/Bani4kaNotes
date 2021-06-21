import React from 'react';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteEditForm from './NoteEditForm';
import ThankYou from './ThankYou';
import NoteDeleted from './NoteDeleted';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef, isReadyRef } from './RootNavigation';
const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    return () => {
      isReadyRef.current = false
    };
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
       isReadyRef.current = true;
      }}
    >
      <Stack.Navigator initialRouteName='NoteList'>
      <Stack.Screen name='NoteList' component={NoteList} options={{title: 'Notes'}} />
      <Stack.Screen name='NoteForm' component={NoteForm} options={{title: 'Add Note'}} />
      <Stack.Screen name='NoteEditForm' component={NoteEditForm} options={{title: 'Edit Note'}} />
      <Stack.Screen name='ThankYou' component={ThankYou} options={{title: 'Thank You'}} />
      <Stack.Screen name='NoteDeleted' component={NoteDeleted} options={{title: 'Delete'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

