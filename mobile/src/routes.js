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
        backgroundColor: '#CB4F24',
      }
    },
  })
);

export default Routes;