import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'storybook-project/dist/';
// import './index.css';
import styles from './index.css';


export default class About extends React.Component {
  render() {
    return (
      <div className="home">
        <h1>About</h1>
        <h4>Links:</h4>
        <Button text="KLIKNI ME" />
        <div className={styles.customHome} >
          <Link href="a" to="/somethingNotFound"> Go to Not Found page! </Link>
        </div>
      </div>
    );
  }
}
