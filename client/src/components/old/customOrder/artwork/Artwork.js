import React, { Component } from 'react';
import AvatarEditor from 'react-avatar-editor'
import $ from 'jquery';
//import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
//import "react-tabs/style/react-tabs.css";
import './Artwork.css' 
//import ImageInputDialog from './test.js' 

import Logo from '../../../assets/image/logo.png'
import Logo2 from '../../../assets/image/NewStealthLogo.png'

import InitialFont from "./initialsfont/InitialsFont";

export default class Artwork extends Component {
        constructor(props){
            super(props);
                this.state= {
                    initialValue : "",
                    // initialName: ""
                }            
                this.handleInitialText = this.handleInitialText.bind(this);
                this.InitailsFont = this.InitailsFont.bind(this);
        }   
        InitailsFont(e){
            // this.setState({Initailstext: this.state.InitailsText})
            this.setState({ 
                initialName: e.target.value
            })
    
        }
        handleInitialText = (event) =>{
            this.props.handlerFromParant(this.state.initialValue);
            this.setState({
                initialValue : event.target.value 
            });
        }
      

    render() { 
        
        console.log('initial Child ' + this.state.initialValue);

        return (
            <div> 
               
                <div>     
                    <ul className="nav nav-pills tab-category" style={{fontSize:"15px" }}>
                        <li className="active"><a data-toggle="pill" href="#artwork">Artwork</a></li>
                        <li><a data-toggle="pill" href="#casing">Casing</a></li>
                    </ul>  
                </div>    
              

                <div className="tab-content">
                    <div id="artwork" className="tab-pane fade in active">

                        <section>
                        
                                    <div className="upload-img">
                                       <label>Left</label>
                                       <div className="upload-container">
                                            <a href="">Click here to upload image</a>
                                       </div>
                                    </div>
                                 
                                    <div className="upload-img">
                                       <label>Right</label>
                                       <div className="upload-container">
                                       <a href="">Click here to upload image</a>
                                    </div>
                                    </div>
                                
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                    <div className="changeBg">
                                        <InitialFont
                                        leftText={this.state.initialName}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="row">
                                <div className="col-md-12">  
                                    <div className="changeBg changeLogo">
                                        <h5>Logo</h5>
                                        
                                            <img className="" src={Logo}/>
                                            <img className="" src={Logo2}/>
                                            <div className="form-group">
                                            <input type="checkbox" name="shellText" value=""/>Name Etching on Background of Shell
                                            </div>
                                           
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>

                    <div id="casing" className="tab-pane fade">
                        <section>
                        <b><h4>Wood Burl Collection</h4></b>
                        <div className="row row1">                                
                                
                            </div>
                    </section>
                    </div>
                    
                </div>
            </div>
        )
    }
}
    

