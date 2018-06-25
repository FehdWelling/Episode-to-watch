import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    bgSerie: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: 200,
        top: 0,
        left: 0,
        right: 0
    },
    serie: {
        position: 'relative'
    }
});
