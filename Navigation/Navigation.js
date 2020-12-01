

/* import { createStackNavigator, createAppContainer } from 'react-navigation-stack'
 */
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../Components/Search'
import Details from '../Components/Details'
/* import { createStackNavigator } from '@react-navigation/stack';
 */
const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'details'
    }
  },
  Details: {
    screen:Details
  }
})

export default createAppContainer(SearchStackNavigator)