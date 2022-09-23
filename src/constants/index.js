import {Dimensions} from 'react-native'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const bgs = [ '#FF9C00', '#48D990', '#F7A726']; //--> backgrounds

export {
    width, 
    height,
    bgs,
};