import React, { Component } from 'react';


import OrderDetail from '../OrderDetail';

class Review extends Component {
    constructor(props){
        super();
        this.state = {
          leftColor: "White Solid",
          rightColor: "White Solid",
    
          leftShellColor: "",
          rightShellColor: "",          
          price: 499,
    
        }
    }

    render() {        
        return(
            <div>
                 <OrderDetail 
                    leftFacePlateColor = {this.state.leftColor}
                    rightFacePlateColor = {this.state.rightColor}
                    itemPrice = {this.state.price}
                    leftShellColorName = {this.state.leftShellColor}
                    rightShellColorName = {this.state.rightShellColor}
            />
            </div>
        )
    }
}
export default Review;