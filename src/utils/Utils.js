import { Dimensions } from 'react-native';

const mobileW = Dimensions.get('screen').width;
const mobileH = Dimensions.get('window').height;
const screenHeight = Dimensions.get('screen').height;

export { mobileH, mobileW, screenHeight };
