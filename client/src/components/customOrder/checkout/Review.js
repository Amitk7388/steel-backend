import React, { Component } from 'react';

import './Review.css'
import OrderDetail from '../OrderDetail';
import {Link} from 'react-router-dom'

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
                <div className="container-fluid">
                    <div className="banner-section">
                        <div className="banner-title">
                            <h1>Review Your Order</h1>
                        </div>
                    </div>

                </div>
                <div className="container-box">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="tg-wrap">
                        <table className="tg">
                          <tr>
                            <th className="tg-s8cp"><span >Left FacePlate</span></th>
                            <th className="tg-ycr8">White Solid</th>
                          </tr>
                          <tr>
                            <td className="tg-5n0p"><span >Right FacePlate</span></td>
                            <td className="tg-hyan">White Solid</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59">Left Shell</td>
                            <td className="tg-0lax">Teak Wood</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">Right Shell</td>
                            <td className="tg-hyan">Red</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59">Drivers</td>
                            <td className="tg-0lax">2</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">Type of Drivers</td>
                            <td className="tg-hyan">Hybrid</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59">Configuration</td>
                            <td className="tg-0lax">1x Dynamic (Low/Mid) * 1x Balanced Armature (High)</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">Crossover</td>
                            <td className="tg-hyan">Nil</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59">Isolation</td>
                            <td className="tg-0lax">32dB</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">Bore</td>
                            <td className="tg-hyan">2</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59"><span >Frequency Response</span></td>
                            <td className="tg-0lax">20Hz-20kHz</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">Sensitivity</td>
                            <td className="tg-hyan">103dB SOK @ 1mW</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59"><span >Impedance</span></td>
                            <td className="tg-0lax">16 Ohms @ 1kHz</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p">THD</td>
                            <td className="tg-hyan">1% @ 1kHz</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59"><span >Warranty Period</span></td>
                            <td className="tg-0lax">1 Year</td>
                          </tr>
                          <tr>
                            <td className="tg-5n0p"><span >Refit Policy</span></td>
                            <td className="tg-hyan">30 Days</td>
                          </tr>
                          <tr>
                            <td className="tg-1b59">Price</td>
                            <td className="tg-0lax">US$ 499</td>
                          </tr>
                        </table></div>
                       </div>
                        <div className="col-sm-6">
                            <div className="button-section">
                                <div className="button-container">
                                    <a href="/register" class="btn btn-primary chkout-btn">Checkout</a>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>      
        )
    }
}
export default Review;

                {/* <OrderDetail 
                    leftFacePlateColor = {this.state.leftColor}
                    rightFacePlateColor = {this.state.rightColor}
                    itemPrice = {this.state.price}
                    leftShellColorName = {this.state.leftShellColor}
                    rightShellColorName = {this.state.rightShellColor}
            /> */}