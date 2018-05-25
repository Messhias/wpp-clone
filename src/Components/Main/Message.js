import React from 'react';
import {
    View,
    TouchableHighlight,
    TextInput,
    Text,
    Image
} from 'react-native';
import { connect } from 'react-redux';

import {
    changeMessage,
    sendMessage
} from '../../Actions/AppActions';

class Message extends React.Component {
    constructor(props){
      	super(props);
    }

    _sendMessage() {
        const {
            message,
            contactName,
            contactEmail
        } = this.props;
        
        this.props.sendMessage(message, contactName, contactEmail);
    }

    render() {
        return (
            <View
            style={{
                flex: 1,
                backgroundColor: '#eee4dc',
                padding: 10
            }}
            >
                <View
                    style={{
                        flex: 1,
                        paddingBottom: 20,
                    }}
                >

                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        height: 60,
                    }}
                >
                    <TextInput
                        style={{
                            flex: 4,
                            backgroundColor: '#fff',
                            fontSize: 18,
                            padding: 10
                        }}
                        value={this.props.message}
                        onChangeText={text => this.props.changeMessage(text)}
                    />
                    <TouchableHighlight
                        onPress={this._sendMessage.bind(this)}
                        underlayColor="#fff"
                    >
                        <Image source={require('../../img/enviar_mensagem.png')} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const mapStateToProps = state => (
    {
        message: state.AppReducer.message
    }
)

export default connect(mapStateToProps, {
    changeMessage,
    sendMessage
})(Message)
