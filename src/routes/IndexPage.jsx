import React, { Component } from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './IndexPage.less';

const Btn = ({ dispatch }) => {
  return <Button onClick={() => dispatch({ type: 'count/wao' })}>一个神奇的按钮</Button>;
};

const ConnectBtn = connect()(Btn);


@connect(({ count }) => ({ count }))
class IndexPage extends Component {
  render() {
    const { count, dispatch } = this.props;
    return (
      <div className={styles.normal}>
        <h1 className={styles.title}>
          Yay! Welcome to dva!
        </h1>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
          <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        </ul>
        <Button onClick={() => dispatch({ type: 'count/add' })}>+ 钮{count.current}</Button>
        <Button onClick={() => dispatch({ type: 'count/minus' })}>- 按钮{count.current}</Button>
        <div>最大值{count.record}</div>
        <ConnectBtn />
      </div>
    );
  }
}


export default IndexPage;
