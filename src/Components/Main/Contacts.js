import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { userContactsFetch } from '../../Actions/AppActions';


class Contacts extends React.Component {
    constructor(props){
      	super(props);
    }

    componentWillMount() {
        this.props.userContactsFetch();
        this.createSourceData(this.props.contacts);
    }

    componentWillReceiveProps(nextProps) {
        this.createSourceData(nextProps.contacts);
    }

    createSourceData(contacts) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource =  ds.cloneWithRows(contacts);
    }

    renderRow(contact) {
      return (
        <TouchableHighlight
            onPress={() => Actions.message({
              title: contact.name !== null ? contact.name : '',
              contactName: contact.name !== null ? contact.name : '',
              contactEmail: contact.email !== null ? contact.email : ''
            })}
        >
            <View style={{
                flex: 1,
                padding: 20,
                borderBottomWidth: 1,
                borderColor: '#CCC'
            }}>
                <Text style={{
                    fontSize: 25
                  }}>
                  {contact.name}
                </Text>
                <Text style={{
                    fontSize: 18
                  }}>
                  {contact.email}
                </Text>
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
    const contacts = _.map(state.ContactListReducer, (value, id) => {
        return { ...value, id };
    });
    return { contacts }
}

export default connect(mapStateToProps, { userContactsFetch })(Contacts)
