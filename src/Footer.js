
import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleSendMail = () => {
    const { subject, message } = this.state;
    const email = 'mailto:sanjayarhwork@gmail.com?subject=';
    window.location.href = email;
  };

  render() {
    return (
      <footer>

        <div className="footer-bottom">
          <div className="footer-title">
            Contact Details
          </div>
          <div className="footer-container">
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <a href="https://github.com/sanjaya2357" target='_blank' ><img style={{ height: "8vh" }} src="images\github-96.png" /></a>
              <a><img onClick={this.handleSendMail} style={{ height: "9vh" }} src="images\mail-96.png" /></a>
              <a href="https://www.linkedin.com/in/sanjaya-rh-a4831618b" target='_blank'><img style={{ height: "10vh" }} src="images\linkedin-96.png" /></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
