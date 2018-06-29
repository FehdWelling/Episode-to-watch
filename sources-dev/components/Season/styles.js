import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
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
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#e3e3e3',
        borderWidth: 1
    },
    infoSerie: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    serieName: {
        alignSelf: 'center',
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 15,
    },
    description: {
        fontSize: 10,
        color: '#4d4d4d'
    },
    voteAverage: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#64a1f4'
    }, 
    titleContainer: {
        flexDirection: "row",
    },
    airDate: {
        color: '#4d4d4d'
    }
});
