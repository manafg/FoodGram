
import React, { Component } from 'react';
import {Provider} from 'mobx-react';
import Stores from './app/Stores'
import  AppNavigator from './app/app.navigaation';
import {StyleProvider} from 'native-base';
import getTheme from './native-base-theme/components';
import custome from './native-base-theme/variables/custome'


export default class App extends Component{
  render() {
    return (
    <Provider stores={Stores}>
    <StyleProvider style={getTheme(custome)}>
       <AppNavigator/>
       </StyleProvider>
     </Provider>
    );
  }
}

