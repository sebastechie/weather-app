import React, { Component } from 'react';

import styles from './App.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Routes from '../routes/Routes';
import CardList from '../components/CardList/CardList';

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        {/* <Navbar /> */}
        <CardList />
      </div>
    );
  }

}