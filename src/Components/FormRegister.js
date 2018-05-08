import React  from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const frmRegister = props => (
    <View style={{ flex: 1, padding:10 }}>

        <View style={{ flex: 4, justifyContent: 'center' }}>
            <TextInput
                placeholder="Name"
                style={{ fontSize: 20, height: 45}}
                value={props.name}
            />
            <TextInput
                placeholder="E-mail"
                style={{ fontSize: 20, height: 45}}
                value={props.email}
            />
            <TextInput
                placeholder="Password"
                style={{ fontSize: 20, height: 45}}
                value={props.password}
            />
        </View>

        <View style={{ flex: 1 }}>
            <Button
                color='#115E54'
                onPress={() => false}
                title="Register"
            />
        </View>

    </View>
);

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name
    }
)

export default connect(mapStateToProps, null)(frmRegister);
