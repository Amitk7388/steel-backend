import React, { Component } from 'react';
import './CustomHeader.css';


class CustomHeader extends Component {
    constructor(props) {
        super(props);
        this.state={            
        }
    }
    
    render() {
        return(
            <div>
            <div class="container-fluid custom-banner">
                <div class="row nomaj marg-top">
            </div></div>

            <ul class="nav nav-tabs earpiece-typeList">
                <li class="active"><a onClick={this.props.c2TypeClick}>
                    <img src={require("../../assets/image/c2.png")}/></a></li>
                <li><a onClick={this.props.c4TypeClick}><img src={require("../../assets/image/c4.png")}/></a></li>
                <li><a onClick={this.props.c9TypeClick}><img src={require("../../assets/image/c9.png")}/></a></li>
            </ul>
        </div>
        )
    }
}
export default CustomHeader;