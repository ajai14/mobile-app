
// ======================app============================================
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// improing all pages
import Bookorder from './bookorder';
import Homepg from './home';
import SignInScreen from './signup';
import LoginScreen from './login';
import Logo from './logo';
// hotel pg importing 
import Car2 from './car2';
import Car3 from './car3';
import Car4 from './car4';
import Car5 from './car5';
// import Car6 from './car6';
import Car7 from './car7';
import Car8 from './car8';
import Car9 from './car9';
import Car10 from './car10';
import Payment from './Payment';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo"
          component={Logo}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: true}} />
        <Stack.Screen name="Signup" component={SignInScreen} options={{headerShown: true}} />
        <Stack.Screen name="Home" component={Homepg} options={{headerShown: true}} />
        <Stack.Screen name="Booking" component={Bookorder} options={{headerShown: false}} />
        <Stack.Screen name="car2" component={Car2} options={{headerShown: false}}/>
        <Stack.Screen name="car3" component={Car3} options={{headerShown: false}}/>
        <Stack.Screen name="car4" component={Car4} options={{headerShown: false}}/>
        <Stack.Screen name="car5" component={Car5} options={{headerShown: false}}/>
        {/* <Stack.Screen name="car6" component={Car6} options={{headerShown: false}}/> */}
        <Stack.Screen name="car7" component={Car7} options={{headerShown: false}}/>
        <Stack.Screen name="car8" component={Car8} options={{headerShown: false}}/>
        <Stack.Screen name="car9" component={Car9} options={{headerShown: false}}/>
        <Stack.Screen name="car10" component={Car10} options={{headerShown: false}}/>
        <Stack.Screen name="payment" component={Payment} options={{headerShown: true}}/>


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;