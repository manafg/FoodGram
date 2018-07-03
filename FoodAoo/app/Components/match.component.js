import React , {Component} from 'react';
import {Button, Icon, Spinner  , Card , CardItem, DeckSwiper } from 'native-base';
import {View, Text, Image} from 'react-native'
import { observer} from 'mobx-react/native';
import {obesrvable} from 'mobx';
import {createAutoSubscriber, autoSubscriber} from 'firebase-nest';

 class Match extends Component {

    constructor (props) {
        super(props);
        this.state = {
            _autoSubscriberFetching : true,
            _autoSubscriberError : null
        }
    }
    static getSubs (props , state){
     const {auth , matches} = props.store;
     return auth.authuser ? mathches.subs : []
    }

subscribesubs (subs , props , state) {
    const matches = props.stores;
    return matches.subscribeSubWithPromise(subs);
}
markViewed(mathc){
    this.props.stores.matches.markViewed(match[0]);
}

renderCard (post , store){ 
const postObj = post ? post[1] : null;
if(postObj){
    let pic = {uri : postObj.url}
    let text = postobj.text;
}
return (
    <Card>
        <CardItem cardBody>
{pic.uri != undefined && pic.uri != "" ? <Image style={styles.thumbnail}/> : null }
        </CardItem>
            <Text>{{text}} </Text>
    </Card>
)
}
    render () {
        const {matches , auth} =this.props;
        const user = auth.authUSer;

        const {_autoSubscriberFetching: fetching , _autoSubscriberError: error} = this.state;
       
       if(error){
           return <Text style={{backGround : "red"}}>{{error}}</Text>
       }

       const list = postList  ? postList.entries() : null
        return (
            <View>
                <DeckSwiper
                dataSource={list}
                renderItem={(card)=> this.renderCard(card, matches)}
                looping={false}
                onSwipeLeft={(item) => this.markViewed(item)}
                onSwipeRight={(item) => this.markViewed(item)}
                />

                </View>
        )
    }
}
const styles = StyleSheet.create({
    text : {

        color : 'black',
        fontSize: 24,
        paddingTop:10,
        paddingBottom:10
    },
    thumbnail: { 
        width: 300,
        height: 300,
        flex: 1
    }
})

export default autoSubscriber(observer(Match))