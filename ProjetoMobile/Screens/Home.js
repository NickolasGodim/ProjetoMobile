import{View, Text,Image, StyleSheet,ImageBackground} from 'react-native';


export default function Home(){
    return(
        <View>
            <Text style={styles.containertext}>Bem vindo</Text>
            <View style={styles.Img}>
            <Image style={{width:150, height:150}} source= {require('../assets/gato.jpg')}/>
            </View>
            <Text style={styles.text2}>Esse site é destinado aqueles que adoram gatos</Text>
            <View style={styles.img2}>
            <Image style={{width:150, height:150}} source= {{uri:'https://jpimg.com.br/uploads/2024/12/7-racas-de-gato-com-filhotes-muito-fofos.jpg'}}/>
            </View>
            <Text style={styles.text3}>O gato ou gato doméstico é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação. Ocupando o topo da cadeia alimentar</Text>
            <View style={styles.img4}>
            <Image style={{width:150, height:150}} source= {{uri:'https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/75552.jpg?w=1900&h=1267'}}/>
            <Image style={{width:150, height:150}} source= {require('../assets/gato2.jpg')}/>
            </View>
            <ImageBackground source={require('../assets/gato.jpg')} style={{width: '100%', height: '100%'}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    containertext: {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: 'space-around',
        alignSelf: 'center',
    },
    Img: {
        justifyContent: 'space-around',
        alignItems: 'center',  
    },
    text2: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        padding: 15,
    },
    img2: {
        justifyContent: '',
        alignItems: 'flex-end',
        
    },
    text3: {
        fontSize: 14,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        padding: 15,
    },
    img4: {
        alignItems: 'flex-start',
        flexDirection: 'row',
    },
    brg: {
        flex: 1,
        justifyContent: 'center',
    }
    
    
});

