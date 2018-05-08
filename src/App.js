import React  from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import Reducers from './Reducers';

export default props => (
    <Provider store={createStore(Reducers)}>
        <Routes />
    </Provider>
);
