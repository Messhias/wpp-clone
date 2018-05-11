import React from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';
import Welcome from './Components/Welcome';
import Main from './Components/Main';
import AddContact from './Components/Contacts/Add';

export default props => (
    <Router
        navigationBarStyle={{ backgroundColor: "#115E54" }}
        titleStyle={{ color: "#FFF" }}
    >
        <Stack key="root">
            <Scene
                key='frmLogin'
                component={FormLogin}
                title="Login"
                hideNavBar={true}
            />
            <Scene
                key='frmRegister'
                component={FormRegister}
                title="Register"
                hideNavBar={false}
            />
            <Scene
                key='welcome'
                component={Welcome}
                title="Welcome"
                hideNavBar={true}
            />
            <Scene
                key='main'
                component={Main}
                title="Home"
                hideNavBar={true}
                initial
            />
            <Scene
                key='AddContact'
                component={AddContact}
                title="New contact"
                hideNavBar={false}
            />
        </Stack>
    </Router>
);
