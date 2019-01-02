import React, {Component} from 'react';
import {View, Text} from 'react-native';
import optimizely from '@optimizely/optimizely-sdk';
import axios from 'axios';

class App extends Component {
  state = {
    datafile: '',
    variation: ''
  };


  componentWillMount() {
    axios.get('https://cdn.optimizely.com/datafiles/8xAdEyg6oidksWo1k2rJ8g.json')
      .then(response => {
        this.setState({
          datafile: response.data
        });
        let optimizelyClientInstance = optimizely.createInstance({
          datafile: response.data
        });
        this.setState({
          variation: optimizelyClientInstance.activate('demo', 'rob111')
        });
  });
}



  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{this.state.variation}</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    paddingTop: 50
  },
  textStyle: {
    fontSize: 20
  }
}


export default App;



/*
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Main from './main';
import optimizelyReducer from './reducers/optimizelyReducer';
import {createStore, combineReducers} from 'redux';
import { Scene, Router } from 'react-native-router-flux';
import {Provider} from 'react-redux';
import Step_1 from './Step_1.js'

const reducer = combineReducers({
 optimizelyReducer
})

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
<Provider store={store}>
  <Router hideNavBar={true}>
    <Scene key="root">
      <Scene
        key="Main"
        component={Main}
        title="Main"
        initial
      />
      <Scene
        key="Step_1"
        component={Step_1}
        title="Step_1"
      />
    </Scene>
  </Router>
</Provider>
    )
  }
}

export default App;
*/
