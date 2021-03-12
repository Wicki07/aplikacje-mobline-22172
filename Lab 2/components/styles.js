
import { StyleSheet } from 'react-native';

const styles = {}

styles.home = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#444',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical:128,
    },
    button:{
        flex: 1,
        backgroundColor: '#fa0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 64,
        marginVertical: 32,
        borderRadius:10,
    },
    text: {
        color:'#444',
        fontSize:24,
    },
});


styles.content = StyleSheet.create({
    container: {
        backgroundColor: '#444',
        paddingHorizontal:32,
        paddingVertical:32,
    },
    example:{
        flex: 1,
        backgroundColor: '#fa0',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 32,
        paddingHorizontal:16,
        paddingVertical:16,
        borderRadius:10,
    },
    text: {
        color:'#fa0',
        fontSize:20,
    },
    code:{
        color:'#000',
        fontSize:16,
    }
});

styles.nav = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#444',
        paddingHorizontal:15,
        paddingVertical:32,
    },
    text: {
        color:'#000',
        fontSize:20,
        textAlign: 'center',
    },
    button:{
        flex:1,
        backgroundColor: '#fa0',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15,
        marginVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
        height:100,
        borderRadius:10,
    },
});
  

export default styles