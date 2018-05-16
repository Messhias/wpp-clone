import React from 'react';
import {
  View,
  TextInput,
  Button,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import {
	changeAddContactEmail,
	AddContact,
  errorAddNewContact
} from '../../Actions/AppActions';

const AddContacts = props => (
    <View
        style={{
            flex: 1,
            justifyContent: 'center',
            padding: 20
        }}
    >
        <View
            style={{
                flex: 1,
                justifyContent: 'center'
            }}
        >
            <TextInput
                placeholder="E-mail"
                style={{
                    fontSize: 20,
                    height: 45
                }}
                onChangeText={(email) => props.changeAddContactEmail(email)}
				        value={props.emailValue}
            />
        </View>
        <View
            style={{
                flex: 1
            }}
        >
            <Button
                title="Add"
                color="#115E54"
                onPress={() => props.AddContact(props.emailValue)}
            />
            <Text
              style={{
                color: '#FF0000',
                fontSize: 20
              }}
            >
                {props.errorAddNewContact}
            </Text>
        </View>
    </View>
);

const mapStateToProps = state => (
  	{
  		  emailValue: state.AppReducer.emailValue,
        errorAddNewContact: state.AppReducer.errorAddNewContact
  	}
);

export default connect(mapStateToProps, {
	changeAddContactEmail,
	AddContact
})(AddContacts);
