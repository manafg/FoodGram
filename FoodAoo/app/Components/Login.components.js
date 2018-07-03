import react, {Component} from 'react';
import {Button, Item , Input, Icon, Text, Form } from 'native-base';
import {observer} from 'mobx-react/native';
import observable from 'mobx';

@observe
export default class Login extends Component {

@observable email = '';

@observable password = '';
     
constructor (props) {
    super (props)

}

signin() {
const { auth } = this.props.stores;
const { navigate } = this.props.navigate;
auth.signIn({email : this.email , password:this.password})
.then(()=>{
    navigate('Match')
})

}

render () {
    const {auth} = this.props.stores;
    return (
        <Form>
            <Item style={{marginTop: 10}} rounded>
            <Icon style={{color : "#fff"}} name='person-outline'/>
            <Input 
            placeholder= ' please Enter Email'
            placeholderTextColor = '#fff'
            onChangeText={(email)=>this.email =email}/>
            </Item>

            <Item style={{marginTop: 10}} rounded>
            <Icon style={{color : "#fff"}} name='person-outline'/>
            <Input 
            placeholder= ' please Enter Email'
            placeholderTextColor = '#fff'
            onChangeText={(email)=>this.email =email}/>
            </Item>
            <Button rounded block style={{marginBottom : 10}}
            onPress={this.signIn.bind(this)}>
            <Text>Login</Text>
            </Button>
        </Form>
    )
}
}