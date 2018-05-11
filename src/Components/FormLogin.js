import React  from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    ActivityIndicator
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    changeEmail,
    changePassword,
    login
} from '../Actions/AuthActions';



class frmLogin extends React.Component {
    constructor(props){
    	super(props);
    }

    _login() {
        const {
            email,
            password
        } =  this.props;

        this.props.login(
            email,
            password
        );

    }

    renderAccessButton() {

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
                title="Login"
                onPress={() => this._login()}
            />
        );
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
                <View style={styles.formContainer}>

                    <View style={styles.formTitleContainer}>
                        <Text style={styles.FormTitle}>
                            WPPCLONE
                        </Text>
                    </View>

                    <View style={styles.FormInputContainer}>
                        <TextInput
                            placeholder="E-mail"
                            placeholderTextColor='#FFF'
                            style={styles.formInput}
                            value={this.props.email}
                            onChangeText={text => this.props.changeEmail(text)}
                        />
                        <TextInput
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor='#FFF'
                            style={styles.formInput}
                            value={this.props.password}
                            onChangeText={password => this.props.changePassword(password)}
                        />
                        <Text
                            style={
                                {
                                    color:'#ff0000',
                                    fontSize: 25
                                }
                            }
                        >
                            {this.props.authErro}
                        </Text>
                        <TouchableHighlight
                            onPress={() => Actions.frmRegister() }
                        >
                            <Text style={styles.register}>
                                Don't have account? Register
                            </Text>
                        </TouchableHighlight>
                    </View>

                    <View style={styles.formButtonContainer}>
                        {this.renderAccessButton()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 10,
        marginTop: 50
    },
    formTitleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FormInputContainer: {
        flex: 2,
    },
    formButtonContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    FormTitle: {
        fontSize: 25,
        backgroundColor: 'transparent',
        color: 'white'
    },
    formInput: {
        fontSize: 20,
        height: 45,
        color: '#FFF',
        backgroundColor: 'transparent'
    },
    register: {
        fontSize: 20,
        color: 'white'
    }
});

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name,
        authErro: state.AuthReducer.authErro,
        loading: state.AuthReducer.loading
    }
);

export default connect(mapStateToProps, {
    changeEmail,
    changePassword,
    login
})(frmLogin)
