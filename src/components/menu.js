import React from "react";
import styles from "../styles/menu.module.css";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = { 
      open: false,
    };
  }

  _onMenuClick() {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <div className={styles.menu_section}>
        <div className={styles.menu_button} onClick={this._onMenuClick.bind(this)}>
        {this.state.open ? 'X' : 'Menu'}
        </div>
        <div className={`${styles.menu} ${this.state.open ? styles.open : styles.closed}`}>
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
        </div>
      </div>
    );
  }
}

export default Menu;
