import react , {Component} from 'react';
import { Image, View }from 'react-native';
import {inject} from 'mobx-react';
import { setTimeout } from 'core-js/library/web/timers';
export default class SplashScreen extends Component {

constructor (props ){
    super (props)
}

componentDidMount() {
    const { stores  , navigation} =this.props;
    setTimeout(()=>{
        navigation.navigate("Login");

    }, stores.config.SplashTime);
} 

render() {
<View style={{flex :1}}>
<Image style={{flex :1 , width :null , height: null}} source={stores.config.SplashImage}/>
</View>
}

}