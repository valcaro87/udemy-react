import React from 'react';
import styles from '../Main/main.css';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { footer } = styles;

    return (
      <div>
        <hr />
        <div className={footer}>
          i'm the footer
        </div>
      </div>
    )
  }

}
