import React  from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import {
    changeEmail,
    changePassword,
    changeName,
    registerUser
} from '../Actions/AuthActions';


class frmRegister extends React.Component {
    constructor(props){
    	super(props);
    	this.state = {};
    }

    _registerUser() {
        const {
            name,
            email,
            password
        } = this.props;
        this.props.registerUser({ name, email, password });
    }

    renderRegisterButton() {

        if (this.props.loading) {
            return (
                <ActivityIndicator
                    size="large"
                    />
            );
        }

        return (
            <Button
                color='white'
                onPress={() => this._registerUser()}
                title="Register"
                />
        );
    }

    render() {
        let error = '';

        if (this.props.errorRegister !== '') {
            error = (
                <Text
                    style={{ color: '#FFF', fontSize: 18 }}
                >
                    {this.props.errorRegister}
                </Text>
            );
        }



        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
                <View style={{ flex: 1, padding:10 }}>

                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput
                            placeholder="Name"
                            placeholderTextColor='#FFF'
                            style={{ fontSize: 20, height: 45, backgroundColor: 'transparent'}}
                            value={this.props.name}
                            onChangeText={name => this.props.changeName(name)}
                            />
                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor='#FFF'
                            style={{ fontSize: 20, height: 45, backgroundColor: 'transparent'}}
                            value={this.props.email}
                            onChangeText={email => this.props.changeEmail(email)}
                            />
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor='#FFF'
                            style={{ fontSize: 20, height: 45, backgroundColor: 'transparent'}}
                            value={this.props.password}
                            onChangeText={pass => this.props.changePassword(pass)}
                            />
                        {error}
                    </View>

                    <View style={{ flex: 1 }}>
                        {this.renderRegisterButton()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name,
        errorRegister: state.AuthReducer.errorRegister,
        loading: state.AuthReducer.loading
    }
)

export default connect(mapStateToProps, {
    changeName,
    changePassword,
    changeEmail,
    registerUser
})(frmRegister);
