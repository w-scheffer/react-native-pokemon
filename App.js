import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import InitialPage from '/pages/InitialPage/InitialPage';
import StepOne from '/pages/Register/StepOne/StepOne';
import StepTwo from '/pages/Register/StepTwo/StepTwo';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="InitialPage">
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
