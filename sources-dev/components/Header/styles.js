import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#64a1f4',
    },
    headerTitle: {
        color: 'white',
        fontSize: 25,
    },
    searchIcon: {
        width: 36,
        height: 36,
    },
});
