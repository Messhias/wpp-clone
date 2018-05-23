import React from 'react';
import {
  View,
  Text,
  ListView
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { userContactsFetch } from '../../Actions/AppActions';


class Contacts extends React.Component{
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

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={data => {
                    return (
                      <View style={{
                          flex: 1,
                          padding: 20,
                          borderBottomWidth: 1,
                          borderColor: '#CCC'
                        }}>
                        <Text style={{
                            fontSize: 25
                          }}>
                          {data.name}
                        </Text>
                        <Text style={{
                            fontSize: 18
                          }}>
                          {data.email}
                        </Text>
                      </View>
                    );
                  }
                }
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
