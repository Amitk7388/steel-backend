import React, { Component } from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OrderDetail } from '../../actions/authAction';  
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';

class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            password: '',
            password2: '',  
            errors: {}        
        },
        this.onSubmit = this.onSubmit.bind(this);        
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
          this.setState({errors: nextProps.errors})
        }
      }

    onSubmit(e){
        e.preventDefault();
        const checkPay = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        }; 
   

        console.log(checkPay); 
        this.props.OrderDetail(checkPay, this.props.history);
    }
    //axios.post('/api/users/check/pay', checkPay);


    render() {
        
        return(
            <div className="container">

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.leftFacePlateColor}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.rightFacePlateColor}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.leftShellColorName}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.rightShellColorName}/>
                </div>

                <div className="form-group">
                    <input type="text" name="" className="from-congtrol" value={this.props.itemPrice}/>
                </div>


            </div>
        )
    }
}
export default OrderDetail;