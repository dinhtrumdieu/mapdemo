import { AppRegistry } from 'react-native';
import App from './App';
import AnimatedMarkers from "./app/src/AnimatedMarkers";
import Callouts from "./app/src/Callouts";
import MarkerTypes from "./app/src/DraggableMarkers";
import Overlays from "./app/src/Overlays";
import DefaultMarkers from "./app/src/DefaultMarkers";
import StaticMap from "./app/src/StaticMap";

AppRegistry.registerComponent('GoogleMapDemo', () => StaticMap);
