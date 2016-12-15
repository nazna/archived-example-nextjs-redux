import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers';
import Counter from '../components/Counter';

const initializeStore = (reducer, initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState);
  } else {
    if (!window.store) {
      window.store = createStore(reducer, initialState);
    }
    return window.store;
  }
}

export default class App extends React.Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initializeStore(reducer, 0, isServer);
    return { initialState: store.getState(), isServer };
  }

  constructor(props) {
    super(props);
    this.store = initializeStore(reducer, props.initialState, props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Counter />
      </Provider>
    );
  }
}
