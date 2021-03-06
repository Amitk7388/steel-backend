import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import {Link} from "react-router-dom";
import Login from './Login';

class Register extends Component {
  constructor() {  
    super();
    this.state= {
      name: '',
      email: '',
      password: '',
      password2: '',  
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.errors){
      this.setState({errors: nextProps.errors})
    }
  }
  onSubmit(e){
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }; 
    console.log(newUser); 
    this.props.registerUser(newUser, this.props.history);
   
    }
  onChange(e){
    this.setState({ [e.target.name]: e.target.value});
  }
  render(){
    const { errors } = this.state;

   // const { user } =this.props.auth;

    return (
      <div>
      <div className="container-fluid">
          <div className="banner-section">
              <div className="banner-title">
                  <h1>Login/Register</h1>
              </div>
          </div>

      </div>
      <div className="register">
        <div className="container">
          <div className="row m0">
          <div className="col-sm-02"></div>

            <div className="col-md-6 m-auto">
            <div className="form-layout">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">
                Create an Account for New User
              </p>
              <form noValidate onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="Name"
                    name="name"
                    type="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                  />                  
                  <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                  />
                  <TextFieldGroup
                    placeholder="conform Password"
                    name="password2"
                    type="password"
                    value={this.state.password2}
                    onChange={this.onChange}
                    error={errors.password2}
                  />
                
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form></div>
            </div>
            
            <div className="col-md-06">
              <div>
                <Login />
              </div>
              </div>            
          </div>   
        </div>
      </div>
      </div>
    );
  }
} 
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
