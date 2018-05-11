import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, SceneMap } from 'react-native-tab-view';

import TabBarMenu from './Main/TabBarMenu';
import Messages from './Main/Messages';
import Contacts from './Main/Contacts';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Main extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Messages' },
      { key: 'second', title: 'Contacts' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => <TabBarMenu {...props} />;

  _renderScene = SceneMap({
    first: Messages,
    second: Contacts,
  });

  render() {
    return (
      <TabViewAnimated
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
