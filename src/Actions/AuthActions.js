import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_NAME,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOADING
} from './Types';

var config = {
    apiKey: "AIzaSyD4_4AXLHP7Kb2GDYTGxE-cVAy8ZC7AVr8",
    authDomain: "wppclone-e6384.firebaseapp.com",
    databaseURL: "https://wppclone-e6384.firebaseio.com",
    projectId: "wppclone-e6384",
    storageBucket: "wppclone-e6384.appspot.com",
    messagingSenderId: "562045995907"
};
firebase.initializeApp(config);

export const changeEmail = (email) => {
    return {
        type: CHANGE_EMAIL,
        payload: email
    }
}

export const changePassword = (pass) => {
    return {
        type: CHANGE_PASSWORD,
        payload: pass
    }
}

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    }
}

export const registerUser = ({ name, email, password }) => {

    return dispatch => {

        dispatch({
            type: LOADING
        });
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                let emailB64 = b64.encode(email);

                firebase.database().ref(`/contacts/${emailB64}`).push({
                    name
                })
                .then(value => {
                    registerUserSuccess(dispatch);
                });

            })
            .catch((error) => {
                registerUserError(error, dispatch);
            });

    }
};

const registerUserSuccess = (dispatch) => {
    dispatch (
        {
            type: REGISTER_USER_SUCCESS
        }
    );
    Actions.welcome();
}

const registerUserError = (error, dispatch) => {
    dispatch (
        {
            type: REGISTER_USER_ERROR,
            payload: error.message
        }
    )
}


export const login = (email, password) => {
    return dispatch => {

        dispatch({
            type: LOADING
        });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(resp => {
                loginSuccess(dispatch);
            })
            .catch((err) => {
                loginFail(err, dispatch);
            });
    }
}

const loginSuccess = (dispatch) => {
    dispatch (
        {
            type: LOGIN_SUCCESS
        }
    );

    Actions.main();
}

const loginFail = (error, dispatch) => {
    dispatch (
        {
            type: LOGIN_FAIL,
            payload: error.message
        }
    );
}
