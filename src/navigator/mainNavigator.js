import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile77673Navigator from '../features/UserProfile77673/navigator';
import Settings77672Navigator from '../features/Settings77672/navigator';
import Settings77670Navigator from '../features/Settings77670/navigator';
import SignIn277668Navigator from '../features/SignIn277668/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile77673: { screen: UserProfile77673Navigator },
Settings77672: { screen: Settings77672Navigator },
Settings77670: { screen: Settings77670Navigator },
SignIn277668: { screen: SignIn277668Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
