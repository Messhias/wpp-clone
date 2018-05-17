import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';

import { userContactsFetch } from '../../Actions/AppActions';

class Contacts extends React.Component{

    componentWillMount() {
        this.props.userContactsFetch();
    }

    render() {
        return (
            <View>
                <Text>
                    Contacts
                </Text>
            </View>
        );
    }
}


export default connect(null, { userContactsFetch })(Contacts)
