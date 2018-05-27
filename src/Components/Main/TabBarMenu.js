import React from 'react';
import firebase from 'firebase';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TabBar } from 'react-native-tab-view';
import { connect } from 'react-redux';
import { enableAddNewContact } from '../../Actions/AppActions';

const TabBarMenu = props => (
    <View
      style={{
          marginTop: 20,
          backgroundColor:"#115E54",
          elevation: 4,
          marginBottom: 6
      }}
    >
        <StatusBar
           backgroundColor="#114D44"
        />

        <View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between'
			}}
		>
	        <View>
	          <Text
	            style={{
	                height: 50,
	                justifyContent: 'center',
	                color: '#FFF',
	                fontSize: 20,
	                marginLeft: 20,
	                marginTop: 20
	            }}
	          >
	              My MESSAGE
	          </Text>
	        </View>

	        <View
				style={{
					flexDirection: 'row',
					marginRight: 20
				}}
			>
	          	<View
					style={{
						width: 50,
						justifyContent: 'center',
						alignItems: 'center'
					}}
			 	>
					<TouchableHighlight
						onPress={() => {
                            Actions.AddContact();
                            props.enableAddNewContact();
                        }}
						underlayColor='#114D44'
					>
			            <Image
							source={require('../../img/add-contact.png')}
			            />
					</TouchableHighlight>
	          	</View>
	          	<View
					style={{
						justifyContent: 'center'
					}}
				>
                    <TouchableHighlight
                        onPress={() => firebase.auth().signOut().then(() => Actions.frmLogin())}
                    >
                  		<Text
    						style={{
    							fontSize: 20,
    							color: 'white',
    						}}
    					>
                      		Logout
                  		</Text>
                    </TouchableHighlight>
	          	</View>
	        </View>
		</View>

        <TabBar
          {...props}
          style={{
              backgroundColor:"#115E54",
              elevation: 0
          }}
        />
    </View>
);


export default connect(null, { enableAddNewContact })(TabBarMenu);
