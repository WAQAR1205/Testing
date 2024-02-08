// // In index.js of a new project
// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Navigation } from 'react-native-navigation';

// // Home screen declaration
// const App = (props) => {
//   return (
//     <View style={styles.root}>
//       <Text>Hello React Native Navigation 👋</Text>
//       <Button
//         title='Push Settings Screen'
//         color='#710ce3'
//         onPress={() => Navigation.push(props.componentId, {
//           component: {
//             name: 'Settings',
//             options: {
//               topBar: {
//                 title: {
//                   text: 'Settings'
//                 }
//               }
//             }
//           }
//         })}/>
//     </View>
//   );
// };
// App.options = {
//   topBar: {
//     title: {
//       text: 'App',
//       color: 'white'
//     },
//     background: {
//       color: '#4d089a'
//     }
//   }
// };

// // Settings screen declaration - this is the screen we'll be pushing into the stack
// const SettingsScreen = () => {
//   return (
//     <View style={styles.root}>
//       <Text>Settings Screen</Text>
//     </View>
//   );
// }

// Navigation.registerComponent('App', () => App);
// Navigation.registerComponent('Settings', () => SettingsScreen);

// Navigation.events().registerAppLaunchedListener(async () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [
//           {
//             component: {
//               name: 'App'
//             }
//           }
//         ]
//       }
//     }
//   });
// });

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'whitesmoke'
//   }
// });

// export default App
// HomeScreen.js
// HomeScreen.js
// App.js
// App.js
import React from 'react';
import { Navigation } from 'react-native-navigation';
import HomeScreen from './Components/HomwScreen';
import DetailsScreen from './Components/DetailsScreen';

const App = () => {
  // Register screens
  // Navigation.registerComponent('HomeScreen', () => HomeScreen);
  // Navigation.registerComponent('DetailsScreen', () => DetailsScreen);
  Navigation.registerComponent('Home', () => HomeScreen);
  Navigation.registerComponent('Settings', () => DetailsScreen);
  // Start the app
  // Navigation.events().registerAppLaunchedListener(async () => {
  //   const HomeScreenId = await Navigation.push(componentId, {
  //     component: {
  //       name: 'HomeScreen',
  //       options: {
  //         topBar: {
  //           title: {
  //             text: 'Home'
  //           }
  //         }
  //       }
  //     }
  //   });
  // });
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'Home'
              }
            }
          ]
        }
      }
    });
  });
  return (
    <>
    <HomeScreen />
    </>
  )
};

export default App;
