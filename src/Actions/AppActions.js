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
    ADD_CONTACT_SUCCESS,
    USER_CONTACTS_LIST,
    CHANGE_MESSAGE,
    SEND_MESSAGE,
    USER_CHAT_LIST
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

export const userContactsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        let email64 = b64.encode(currentUser.email);

        firebase.database().ref(`/user_contacts/${email64}`)
            .on('value', snapshot => {
                dispatch({
                    type: USER_CONTACTS_LIST,
                    payload: snapshot.val()
                });
            });
    }
}

export const changeMessage = text => {
    return ({
        type: CHANGE_MESSAGE,
        payload: text
    });
}

export const sendMessage = (message, name, email) => {

    return dispatch => {

        const { currentUser } = firebase.auth();
        const userEmail = currentUser.email;
        const userEmailB64 = b64.encode(userEmail);
        const contactEmailB64 = b64.encode(email);

        firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
            .push({ message, type: "E" })
            .then(() => {
                // store users messages
                firebase.database().ref(`/messages/${contactEmailB64}/${userEmailB64}`)
                    .push({ message, type: "R"})
                    .then(() => {
                        dispatch({
                            TYPE: 'INCLUDE_COMPLETE'
                        })
                    });
            })
            .then(() => {
                // creating headers
                firebase.database().ref(`/users_messages/${userEmailB64}/${contactEmailB64}`)
                    .set({ name, email });

            })
            .then(() => {
                // store headers chat user
                const userData = _.first(_.values(snapshot.val()));
                firebase.database.ref(`/contacts/${userEmailB64}`)
                    .once("value")
                    .then((snapshot) => {
                        firebase.database.ref(`/users_messages/${contactEmailB64}/${userEmailB64}`)
                        .set({ name: userData.name, email });
                    });
            })

        dispatch({
            type: SEND_MESSAGE
        })
    }
}

export const chatUserFetch = email => {

    // get mails on B64
    const { currentUser } = firebase.auth();
    const userEmail = currentUser.email;
    const userEmailB64 = b64.encode(userEmail);
    const contactEmailB64 = b64.encode(email);

    return dispatch => {
        firebase.database().ref(`/messages/${userEmailB64}/${contactEmailB64}`)
            .on('value', snapshot => {
                dispatch({
                    type: USER_CHAT_LIST,
                    payload: snapshot.val()
                })
            })
    }
}
