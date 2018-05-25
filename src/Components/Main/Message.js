import React from 'react';
import {
    View,
    TouchableHighlight,
    TextInput,
    Text,
    Image,
    ListView
} from 'react-native';

import { connect } from 'react-redux';
import _ from 'lodash';

import {
    changeMessage,
    sendMessage,
    chatUserFetch
} from '../../Actions/AppActions';

class Message extends React.Component {
    constructor(props){
      	super(props);
    }

    componentWillMount() {
        this.props.chatUserFetch(this.props.contactEmail);
        this.createDataSource(this.props.chat);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.contactEmail != nextProps.contactEmail) {
            this.props.chatUserFetch(nextProps.contactEmail);
        }
        this.createDataSource(nextProps.chat);
    }

    _sendMessage() {
        const {
            message,
            contactName,
            contactEmail
        } = this.props;

        this.props.sendMessage(message, contactName, contactEmail);
    }

    createDataSource(chat) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows(chat);
    }

    renderRow(text) {
        if (text.type === "E") {
            return (
                <View
                    style={{
                        alignItems: 'flex-end',
                        marginTop: 5,
                        marginBottom: 5,
                        marginLeft: 40
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
                            color: '#000',
                            padding: 10,
                            backgroundColor: '#DBF5D4',
                            elevation: 2,
                            borderRadius: 10
                        }}
                    >
                        {text.message}
                    </Text>
                </View>
            );
        }
        return (
            <View
                style={{
                    alignItems: 'flex-start',
                    marginTop: 5,
                    marginBottom: 5,
                    marginRight: 40
                }}
            >
                <Text
                    style={{
                        fontSize: 18,
                        color: '#000',
                        padding: 10,
                        backgroundColor: '#F7F7F7',
                        elevation: 2,
                        borderRadius: 10
                    }}
                >
                    {text.message}
                </Text>
            </View>
        );
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
                    <ListView
                        enableEmptySections
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
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


const mapStateToProps = state => {

    const chat = _.map(state.ChatReducer, (val, id) => {
        return { ...val, id };
    });

    return (
        {
            message: state.AppReducer.message,
            chat
        }
    );
}

export default connect(mapStateToProps, {
    changeMessage,
    sendMessage,
    chatUserFetch
})(Message)
