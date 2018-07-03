import react from 'react';
import {DrawerNavigator , StackNavigator} from 'react-navigation'
import {DrawerNavigator} from 'react-navigation';
import SplashScreen from './Screens/Spalsh.screen';
import LoginScreen from './Screens/Login.Screen';
import MatchScreen from './Screens/MatchScreen';
import PostScreen from ''
const Login ={ 
    screen : "login",
    navigatoionOptions:{
        header : null
    }

}

const Match = {
    screen : MatchScreen,
    navigationOptions :{ 
        headerMode : 'screen',
        headerTitle: 'Matches',
        drawerLabel: 'Matches'
    }
}

const Post = {
    screen :PostScreen,
    navigationOptions :{ 
        headerMode : 'screen',
        headerTitle: 'Post',
        drawerLabel: 'Post'
    }
}


const MatchStack = StackNavigator({
Match : Match
}, {})


const Splash ={
    screen : SplashScreen,
    navigationOptions :{
        header : null
    }
}

const RouterConfig = {
    inetialRoute : 'Splash'
};
const AppNavigator = DrawerNavigator({
    Splash : Splash,
    Login : Login,
    Match : {screen : MatchStack},
    Post: post
},RouterConfig);

export default  AppNavigator;
