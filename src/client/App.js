import React, { Component, Fragment } from 'react';
// import { hot } from 'react-hot-loader'
class App extends Component {
  render() {
    const { text = '' } = this.props
    return (
      <Fragment>
        <h1>ReactSSR Demo</h1>
        <p>{text || "这是客户端渲染"}</p>
      </Fragment>
    );
  }
}
export default App