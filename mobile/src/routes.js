import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen: Main,
      navigationOptions: {
        title: 'Radar Shiva'
      },
    },
    Profile:{
      screen: Profile,
      navigationOptions: {
        title: 'Página Web'
      },
    },
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#723888',
      }
    },
  })
);

export default Routes;