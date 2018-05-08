import React  from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    TouchableHighlight
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
    changeEmail,
    changePassword
} from '../Actions/AuthActions';

const frmLogin =  props => (
        <View style={styles.formContainer}>

            <View style={styles.formTitleContainer}>
                <Text style={styles.FormTitle}>
                    WPPCLONE
                </Text>
            </View>

            <View style={styles.FormInputContainer}>
                <TextInput
                    placeholder="E-mail"
                    style={styles.formInput}
                    value={props.email}
                    onChangeText={text => props.changeEmail(text)}
                />
                <TextInput
                    placeholder="Senha"
                    style={styles.formInput}
                    value={props.password}
                    onChangeText={password => props.changePassword(password)}
                />
                <TouchableHighlight
                    onPress={() => Actions.frmRegister() }
                >
                    <Text style={styles.register}>
                        Ainda não tem cadastro? Cadastre-se
                    </Text>
                </TouchableHighlight>
            </View>

            <View style={styles.formButtonContainer}>
                <Button
                    color='#115E54'
                    title="Login"
                    onPress={() => false}
                    />
            </View>

        </View>
);

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
        fontSize: 25
    },
    formInput: {
        fontSize: 20,
        height: 45
    },
    register: {
        fontSize: 20
    }
});

const mapStateToProps = state => (
    {
        email: state.AuthReducer.email,
        password: state.AuthReducer.password,
        name: state.AuthReducer.name
    }
);

export default connect(mapStateToProps, { changeEmail, changePassword })(frmLogin)
