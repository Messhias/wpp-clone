import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { chatListFetch } from '../../Actions/AppActions';
import ChatListReducer from '../../Reducers/ChatListReducer';

class Message extends React.Component {

    componentWillMount() {
        this.props.chatListFetch();
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    const chats = _.map(state.ChatListReducer, (val, uid) => {
        return { ...val, uid };
    });

    return {
        chats
    }
}

export default connect(mapStateToProps, {
    chatListFetch
})(Message);
