import React from "react";
import Link from "gatsby-link";
import styles from "../styles/menu.module.css";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }

  _onMenuClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const navigation = this.props.menuItems.map(item => {
      return (
        <div key={item.node.id}>
          <Link to={`/${item.node.slug}/`}>{item.node.title}</Link>
        </div>
      );
    });

    return (
      <div className={styles.menu_section}>
        <div
          className={styles.menu_button}
          onClick={this._onMenuClick.bind(this)}
        >
          {this.state.open ? "X" : "Menu"}
        </div>
        <div
          className={`${styles.menu} ${
            this.state.open ? styles.open : styles.closed
          }`}
        >
          {navigation}
        </div>
      </div>
    );
  }
}

export default Menu;
