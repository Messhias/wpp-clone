import React from 'react';
import {
    Text,
    Image,
    Button,
    View,
    ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default props => (

    <ImageBackground style={{ flex: 1, width: null }} source={require('../img/bg.png')}>
        <View
            style={{ flex: 1, padding: 15 }}
        >
            <View
                style={
                    {
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }
                }
            >
                <Image
                source={require('../img/logo.png')}
                />
                <Text
                    style={
                        {
                            color: 'white',
                            fontSize: 40
                        }
                    }
                >
                    Welcome
                </Text>
            </View>

            <View
                style={{ flex: 1 }}
            >
                <Button
                    color='white'
                    title="Login"
                    onPress={() => Actions.frmLogin()}
                />
            </View>
        </View>
    </ImageBackground>
);
