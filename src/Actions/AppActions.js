import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

// var config = {
//     apiKey: "AIzaSyD4_4AXLHP7Kb2GDYTGxE-cVAy8ZC7AVr8",
//     authDomain: "wppclone-e6384.firebaseapp.com",
//     databaseURL: "https://wppclone-e6384.firebaseio.com",
//     projectId: "wppclone-e6384",
//     storageBucket: "wppclone-e6384.appspot.com",
//     messagingSenderId: "562045995907"
// };
// firebase.initializeApp(config);

import {
    CHANGE_ADD_CONTACT_EMAIL,
    ADD_NEW_CONTACT,
    ADD_NEW_CONTACT_ERROR,
    ADD_CONTACT_SUCCESS
} from './Types';

export const changeAddContactEmail = email => {
    return {
        type: CHANGE_ADD_CONTACT_EMAIL,
        payload: email
    }
}

export const AddContact = (email) => {
    let email64 = b64.encode(email);
    return dispatch => {
        firebase.database().ref(`/contacts/${email64}`)
        .once('value')
        .then(snapshot => {
            if (snapshot.val()) {
                const userData = _.first(_.values(snapshot.val()));

                const {
                    currentUser
                } = firebase.auth();
                let userEmail = b64.encode(currentUser.email);

                firebase.database().ref(`/user_contacts/${userEmail}`)
                    .push({
                        email,
                        name: userData.name
                    })
                    .then((response) => {
                        addContactSuccess(dispatch);
                    })
                    .catch((err) => { addContactError(err.message, dispatch); });

            } else {
                dispatch({
                    type: ADD_NEW_CONTACT_ERROR,
                    payload: 'This user don\'t exists'
                })
            }
        });
    }
}

const addContactError = (error, dispatch) => {
    dispatch({
        type: ADD_NEW_CONTACT_ERROR,
        payload: error
    });
}

const addContactSuccess = dispatch => {
    dispatch ({
        type: ADD_CONTACT_SUCCESS,
        payload: true
    });
}

export const enableAddNewContact = () => (
    {
        type: ADD_CONTACT_SUCCESS,
        payload: false
    }
)
