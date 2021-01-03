import React from "react";
// import "../css/header.scss";

class Header extends React.Component {
    logincheck(){
        const username = this.props.username;
        if(!username){
            return (
                <React.Fragment>
                    <div className="buttons">
                        <a className="button is-primary" href="/">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light" href="/login">
                            Log in
                        </a>
                    </div>
                </React.Fragment>
            )
        }else{
            return (
                <span className="username">
                    <i className="far fa-user"/>
                    {this.props.username}
                </span>
            )
        }
    }
    render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">Home</a>
            </div>

              <div className="navbar-end">
                  <div className="navbar-item">
                      {this.logincheck()}
                  </div>
              </div>

          </div>
        </nav>
    );
  }
}

export default Header;
