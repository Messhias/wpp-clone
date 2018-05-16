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

class AddContacts extends React.Component {

    renderFormAddContact() {
        return (
            <View
                style={{
                    flex: 1
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
                        onChangeText={(email) => this.props.changeAddContactEmail(email)}
                        value={this.props.emailValue}
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
                        onPress={() => this.props.AddContact(this.props.emailValue)}
                    />
                    <Text
                      style={{
                        color: '#FF0000',
                        fontSize: 20
                      }}
                    >
                        {this.props.errorAddNewContact}
                    </Text>
                </View>
            </View>
        );
    }

    renderSucces() {
        return (
            <View>
                <Text
                  style={{
                    fontSize: 20
                  }}
                >
                  Your new contact has been added!
                </Text>
            </View>
        );
    }

    renderAddContactSuccess() {
        let view;
        if (!this.props.addContactSuccess) {
            view = this.renderFormAddContact();
        } else {
            view = this.renderSucces();
        }

        return view;
    }

    render() {
        return (
              <View
                  style={{
                      flex: 1,
                      justifyContent: 'center',
                      padding: 20
                  }}
              >
              {this.renderAddContactSuccess()}
            </View>
        );
    }
}

const mapStateToProps = state => (
  	{
  		  emailValue: state.AppReducer.emailValue,
        errorAddNewContact: state.AppReducer.errorAddNewContact,
        addContactSuccess: state.AppReducer.addContactSuccess
  	}
);

export default connect(mapStateToProps, {
	changeAddContactEmail,
	AddContact
})(AddContacts);
