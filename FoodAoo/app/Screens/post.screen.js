import React , {Component} from 'react';
import {Container, Content, Icon, Button, Form, Text, Input, Card, CardItem} from 'native-base';
import {image} from 'react-native';
import {inject} from 'mobx';
import { inject} from 'mobx-react';
import {observable} from 'mobx';
import {observer} from 'mobx-react/native';
import ImagePicker from 'react-native-image-picker';
import { observe } from 'mobx/lib/internal';

const option ={ 
    title : 'Select Image',
    quality: 1.0,
    maxWidth :500,
    maxHeight: 500,
    storageOption : {
        skipBackup : true,
        path: 'image'

    }
}

@inject('stores');
@observe
export default class PostScreen extends Component {
    @observable image = null;
    @observable text = '';
    @observable uploading = false;
    @observable data = null;

constructor (props){
    super (pros);
}

static navigation  = ({navigation}) => ({
headerLeft : <Button transparent 
onPress={()=> navigation.goBack(null)}>
<Icon name='chevron-left' style={{color: '#fff'}} size={24}/>
</Button>
})

componentDidMount(){
    ImagePicker.showImagePicker(option, (res)=>{
        this.image = {uri: res.uri}
        this.data = res;
    })
}
post() {
    const { post } = this.props.stores;
    const {navigation} = this.props;
    this.uploading = true;
    posts.postImage(this.data, (snap)=>{
        posts.add(this.text, snap.downloadURL)
        this.uploading =false;
        navigation.goBack(null);
    })
}

render () {
    return null;
}
}
