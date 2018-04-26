import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        padding: 10,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    formInput: {
        paddingLeft: 5,
        height: 50,
        borderWidth: 1,
        borderColor: "#555555",
    },
    formButton: {
        borderWidth: 1,
        borderColor: "#555555",
    },
    serie: {
        flex: 1,
        flexDirection: "row",
        marginTop: 15,
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 5
    },
    serieName: {
        fontWeight: 'bold',
        fontSize: 15
    }
});
