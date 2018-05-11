import firebase from 'firebase';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import Reducers from './Reducers';

export default class App extends React.Component {

    componentWillUnmount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD4_4AXLHP7Kb2GDYTGxE-cVAy8ZC7AVr8",
            authDomain: "wppclone-e6384.firebaseapp.com",
            databaseURL: "https://wppclone-e6384.firebaseio.com",
            projectId: "wppclone-e6384",
            storageBucket: "wppclone-e6384.appspot.com",
            messagingSenderId: "562045995907"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(Reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />
            </Provider>
        );
    }
}
