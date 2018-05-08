import React from 'react';
import {
    Router,
    Stack,
    Scene
} from 'react-native-router-flux';

import FormLogin from './Components/FormLogin';
import FormRegister from './Components/FormRegister';

export default props => (
    <Router>
        <Stack key="root">
            <Scene
                key='frmLogin'
                component={FormLogin}
                title="Login"
            />
            <Scene
                key='frmRegister'
                component={FormRegister}
                title="Cadastre-se"
            />
        </Stack>
    </Router>
);
