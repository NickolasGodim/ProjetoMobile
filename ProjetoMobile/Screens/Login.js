import{View, Text,Button,TextInput, StyleSheet} from 'react-native';

export default function Login(){
    return(
    <View>
        <View>
        <Text style={styles.text}>Realizar Login ou Registro de Usuario</Text>
        </View>
        <TextInput style={styles.input1}
                        placeholder='Usuario'
                        placeholderTextColor={'black'}
                    />
                    <TextInput style={styles.input1}
                        placeholder='Senha'
                        placeholderTextColor={'black'}
                    />
        
                    <Button style={styles.botao}
                        title="Login"
                        color={'black'} 
                    />

    </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        
    },
    input1: {
        alignSelf: 'center',
        fontSize: 20,
        justifyContent: 'center',
        width: 150,
        borderRadius: 2,
       
    },
    botao: {
        alignSelf: 'center',
        width: 150,
        justifyContent: 'space-evenly',
    },
});