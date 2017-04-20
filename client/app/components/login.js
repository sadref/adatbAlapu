import React from 'react';
import bindActionCreators from 'redux/lib/bindActionCreators';
import { connect } from 'react-redux';
import { Link } from 'react-router';

require('../assets/css/login.css')

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="login">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <div className="form-wrap">
                                <h1>Log in with your email account</h1>
                                <form role="form" action="javascript:;" method="post" id="login-form" autocomplete="off">
                                    <div className="form-group">
                                        <label for="email" className="sr-only">Email</label>
                                        <input type="email" name="email" id="email" className="form-control" placeholder="somebody@example.com" />
                                    </div>
                                    <div className="form-group">
                                        <label for="key" className="sr-only">Password</label>
                                        <input type="password" name="key" id="key" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="checkbox">
                                        <span className="character-checkbox" onclick="showPassword()"></span>
                                        <span className="label">Show password</span>
                                    </div>
                                    <input type="submit" id="btn-login" className="btn btn-custom btn-lg btn-block" value="Log in" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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


export default connect(mapStateToProps, matchDispatchToProps)(Login);