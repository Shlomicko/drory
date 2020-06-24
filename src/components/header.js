import { Link } from "gatsby";
import React from "react";
import "./header.css";
import VisibilitySensor from "react-visibility-sensor";
import Menu from "./menu";

class Header extends React.Component {

  state = {
    fixed: false
  }

  visibilitySensorChange = val => {
    if (val) {
      this.setState({ fixed: false })
    } else {
      this.setState({ fixed: true })
    }
  }

  getHeaderSize = () => {
    const fixed = this.state.fixed ? "fixed" : "";
    const homepage = this.props.path === "/" ? "homepage" : "";

    return `${fixed} ${homepage}`;
  };

  render() {
    const { pages } = this.props;
    return (
      <React.Fragment>
        <header className={`header ${this.getHeaderSize()}`}>
          <Link to="/" className="logoType">
            <div className="logo">
            </div>
          </Link>
          <Menu
            pages={pages}
          />
        </header>
        <VisibilitySensor onChange={this.visibilitySensorChange}>
          <div className="sensor"/>
        </VisibilitySensor>
      </React.Fragment>
    );
  }
}

export default Header