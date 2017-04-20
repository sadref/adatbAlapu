import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//require('../assets/css/register.css');

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            passwordagain: ""
        }
    }

    sendRegistration() {
        this.props.socket.emit('sendregister', {
            username: this.state.name,
            email: this.state.email,
            password: this.state.password,
            passwordagain: this.state.passwordagain
        })
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    handlePasswordAgainChange(e) {
        this.setState({ passwordagain: e.target.value })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Register New User</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 field-label-responsive">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{ width: "2.6rem" }}><i className="fa fa-user"></i></div>
                                <input value={this.state.name} onChange={(e) => this.handleNameChange(e)} type="text" name="name" className="form-control" id="name"
                                    placeholder="John Doe" required autoFocus />
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                    Hiba
                                </span>
                            </div>
                        </div>*/}
                </div>
                <div className="row">
                    <div className="col-md-3 field-label-responsive">
                        <label htmlFor="email">E-Mail Address</label>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{ width: "2.6rem" }}><i className="fa fa-at"></i></div>
                                <input value={this.state.email} onChange={(e) => this.handleEmailChange(e)} type="text" name="email" className="form-control" id="email"
                                    placeholder="you@example.com" required autoFocus />
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                    Hiba
                        </span>
                            </div>
                        </div>*/}
                </div>
                <div className="row">
                    <div className="col-md-3 field-label-responsive">
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group has-danger">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{ width: "2.6rem" }}><i className="fa fa-key"></i></div>
                                <input value={this.state.password} onChange={(e) => this.handlePasswordChange(e)} type="password" name="password" className="form-control" id="password"
                                    placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                    {/*<div className="col-md-3">
                            <div className="form-control-feedback">
                                <span className="text-danger align-middle">
                                    <i className="fa fa-close"> Example Error Message</i>
                                </span>
                            </div>
                        </div>*/}
                </div>
                <div className="row">
                    <div className="col-md-3 field-label-responsive">
                        <label htmlFor="password">Confirm Password</label>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                                <div className="input-group-addon" style={{ width: "2.6rem" }}>
                                    <i className="fa fa-repeat"></i>
                                </div>
                                <input value={this.state.passwordagain} onChange={(e) => this.handlePasswordAgainChange(e)} type="password" name="password-confirmation" className="form-control"
                                    id="password-confirm" placeholder="Password" required />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <button className="btn btn-success" onClick={() => this.sendRegistration()}><i className="fa fa-user-plus"></i> Register</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    };
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Register);