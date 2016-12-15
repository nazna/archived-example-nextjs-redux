import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Counter from '../components/Counter';

export default class App extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = configureStore({ counter: 0 }, isServer);
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);
    this.store = configureStore(props.initialState, props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Counter />
      </Provider>
    );
  }
}
