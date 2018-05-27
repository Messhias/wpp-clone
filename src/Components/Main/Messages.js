import React, { Component } from 'react';
import {
    View,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';


import { chatListFetch } from '../../Actions/AppActions';

class Messages extends React.Component {

    componentWillMount() {
        this.props.chatListFetch();
        this.criaFonteDeDados(this.props.chats);
    }

    componentWillReceiveProps(nextProps) {
        this.criaFonteDeDados(nextProps.chats);
    }

    criaFonteDeDados( chats ) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

        this.dataSource = ds.cloneWithRows( chats );
    }

    renderRow(chats) {
        return (
            <TouchableHighlight
                onPress={() => Actions.message({
                      title: chats.name !== null ? chats.name : '',
                      contactName: chats.name !== null ? chats.name : '',
                      contactEmail: chats.email !== null ? chats.email : ''
                    })
                }
            >
                <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: "#ccc" }}>
                        <Text style={{ fontSize: 25 }}>{chats.name}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

mapStateToProps = state => {
    const chats = _.map(state.ChatListReducer, (val, uid) => {
        return { ...val, uid };
    });

    return {
        chats
    }
}

export default connect(mapStateToProps, { chatListFetch })(Messages);
