import react , {Component} from 'react';
import { Container , Content} from 'native-base';
import {View , Image, StyleSheet, Dimensions} from 'react-native';
import {inject} from 'mobx-react';
import {Login } from '../Components/Login.components'


@inject('stores')
export default class LoginPage extends Component {
constructor (props){ 
    super (props);
}

render () {
const { stores } =  this.props;
return (
    <Container>
        <View style={styles.Container}>
            <Content scrollEnabled={false}>
                <Image style={styles.loginForeGround} source={stores.config.loginBG}/>
                <View style={styles.loginBackground}>
                    <Login {...this.props}/>
                  </View>
                </Content>
            </View>
        </Container>

)
}
}

const  styles = StyleSheet({
Container : {
    position : 'absluote',
    bottom: 0,
    left: 0,
    right: 0
},
loginBackground: {
flex : 1,
width: null,
height: null
},
loginForeGround:{
    flex: 1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop:20,
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:90,
    bottom : 0
}

})