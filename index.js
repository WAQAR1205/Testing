// index.js
import { AppRegistry } from 'react-native';
import App from './App'; // Import your main App component
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
