import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HOME from './src/Home';
import FIRST from './src/First';
import SECOND from './src/Second';
import THIRD from './src/Third';
import FOURTH from './src/Fourth';
import FIFTH from './src/Fifth';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home" component={HOME} options={{title: 'Home'}}
        />

<Stack.Screen
          name="First" component={FIRST} options={{title: 'First'}}
        />

<Stack.Screen
          name="Second" component={SECOND} options={{title: 'Second'}}
        />
        <Stack.Screen
          name="Third" component={THIRD} options={{title: 'Third'}}
        /> */}
        <Stack.Screen
          name="Fourth" component={FOURTH} options={{title: 'Fourth'}}
        />
        <Stack.Screen
          name="Fifth" component={FIFTH} options={{title: 'Fifth'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;