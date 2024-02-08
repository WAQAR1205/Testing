// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

const HomeScreen = (props) => {
  const navigateToDetailsScreen = () => {
    Navigation.push(props.componentId, {
      component: {
        name: 'DetailsScreen',
        options: {
          topBar: {
            title: {
              text: 'Details'
            }
          }
        }
      }
    })
  };

  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={navigateToDetailsScreen}
        // onPress={()=>console.log('jj')}
        />
        <Button
        title='Click'
        onPress={()=>console.log('hey')}
        />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'HomeScreen',
      color: 'black'
    },
    background: {
      color: 'red'
    }
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20
//   }
// });
// HomeScreen.options = {
//     topBar: {
//       title: {
//         text: 'Home',
//       }
//     }
//   };
export default HomeScreen;