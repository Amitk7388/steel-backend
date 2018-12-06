import React, { Component } from 'react';
import './CustomOrder.css';
import FacePlate from "./facePlate/FacePlate";
import Artwork from "./artwork/Artwork";
import OrderDetail from "./OrderDetail";

// premium faceplate images
import lf15 from '../../assets/image/faceplates/premium/lf15.png'
import rf15 from '../../assets/image/faceplates/premium/rf15.png'

import lf16 from '../../assets/image/faceplates/premium/lf16.png'
import rf16 from '../../assets/image/faceplates/premium/rf16.png'

import lf17 from '../../assets/image/faceplates/premium/lf17.png'
import rf17 from '../../assets/image/faceplates/premium/rf17.png'

import lf28 from '../../assets/image/faceplates/premium/lf28.png'
import rf28 from '../../assets/image/faceplates/premium/rf28.png'

import lf29 from '../../assets/image/faceplates/premium/lf29.png'
import rf29 from '../../assets/image/faceplates/premium/rf29.png'

// custom faceplates
import lf11 from '../../assets/image/faceplates/custom/lf11.png'
import rf11 from '../../assets/image/faceplates/custom/rf11.png'

import lf12 from '../../assets/image/faceplates/custom/lf12.png'
import rf12 from '../../assets/image/faceplates/custom/rf12.png'

import lf13 from '../../assets/image/faceplates/custom/lf13.png'
import rf13 from '../../assets/image/faceplates/custom/rf13.png'

import lf14 from '../../assets/image/faceplates/custom/lf14.png'
import rf14 from '../../assets/image/faceplates/custom/rf14.png'

import lf18 from '../../assets/image/faceplates/custom/lf18.png'
import rf18 from '../../assets/image/faceplates/custom/rf18.png'

import lf19 from '../../assets/image/faceplates/custom/lf19.png'
import rf19 from '../../assets/image/faceplates/custom/rf19.png'

import lf20 from '../../assets/image/faceplates/custom/lf20.png'
import rf20 from '../../assets/image/faceplates/custom/rf20.png'

import lf21 from '../../assets/image/faceplates/custom/lf21.png'
import rf21 from '../../assets/image/faceplates/custom/rf21.png'

import lf22 from '../../assets/image/faceplates/custom/lf22.png'
import rf22 from '../../assets/image/faceplates/custom/rf22.png'

import lf23 from '../../assets/image/faceplates/custom/lf23.png'
import rf23 from '../../assets/image/faceplates/custom/rf23.png'

import lf24 from '../../assets/image/faceplates/custom/lf24.png'
import rf24 from '../../assets/image/faceplates/custom/rf24.png'

import lf25 from '../../assets/image/faceplates/custom/lf25.png'
import rf25 from '../../assets/image/faceplates/custom/rf25.png'

import lf26 from '../../assets/image/faceplates/custom/lf26.png'
import rf26 from '../../assets/image/faceplates/custom/rf26.png'

import lf27 from '../../assets/image/faceplates/custom/lf27.png'
import rf27 from '../../assets/image/faceplates/custom/rf27.png'

// import lf30 from '../../assets/image/faceplates/custom/lf30.png'
// import rf30 from '../../assets/image/faceplates/custom/rf30.png'

import lf30 from '../../assets/image/faceplates/custom/lf030.png'
import rf30 from '../../assets/image/faceplates/custom/rf030.png'

import lf31 from '../../assets/image/faceplates/custom/lf31.png'
import rf31 from '../../assets/image/faceplates/custom/rf31.png'

import lf32 from '../../assets/image/faceplates/custom/lf32.png'
import rf32 from '../../assets/image/faceplates/custom/rf32.png'

import lf33 from '../../assets/image/faceplates/custom/lf33.png'
import rf33 from '../../assets/image/faceplates/custom/rf33.png'

import lf34 from '../../assets/image/faceplates/custom/lf34.png'
import rf34 from '../../assets/image/faceplates/custom/rf34kb.png'

import lf35 from '../../assets/image/faceplates/custom/lf35.png'
import rf35 from '../../assets/image/faceplates/custom/rf35.png'

import lf36 from '../../assets/image/faceplates/custom/lf36.png'
import rf36 from '../../assets/image/faceplates/custom/rf36.png'

import lf37 from '../../assets/image/faceplates/custom/lf37.png'
import rf37 from '../../assets/image/faceplates/custom/rf37.png'

import lf38 from '../../assets/image/faceplates/custom/lf38.png'
import rf38 from '../../assets/image/faceplates/custom/rf38.png'

import lf39 from '../../assets/image/faceplates/custom/lf39.png'
import rf39 from '../../assets/image/faceplates/custom/rf39.png'


import lf40 from '../../assets/image/faceplates/custom/lf40.png'
import rf40 from '../../assets/image/faceplates/custom/rf40.png'

// standard faceplate images
import  '../../assets/EarImages/ls01.png';
import  '../../assets/EarImages/rs01.png';

// import lf01 from '../../assets/image/faceplates/lf01.png'
import rf01 from '../../assets/image/faceplates/rf1.png'

import lf01 from '../../assets/image/faceplates/lf01.png'
// import rf01 from '../../assets/image/faceplates/rf01.png'

import lf02 from '../../assets/image/faceplates/lf02.png'
import rf02 from '../../assets/image/faceplates/rf02.png'

import lf03 from '../../assets/image/faceplates/lf03.png'
import rf03 from '../../assets/image/faceplates/rf03.png'

import lf04 from '../../assets/image/faceplates/lf04.png'
import rf04 from '../../assets/image/faceplates/rf04.png'

import lf05 from '../../assets/image/faceplates/lf05.png'
import rf05 from '../../assets/image/faceplates/rf05.png'

import lf06 from '../../assets/image/faceplates/lf06.png'
import rf06 from '../../assets/image/faceplates/rf06.png'

import lf07 from '../../assets/image/faceplates/lf07.png'
import rf07 from '../../assets/image/faceplates/rf07.png'

import lf08 from '../../assets/image/faceplates/lf08.png'
import rf08 from '../../assets/image/faceplates/rf08.png'

import lf09 from '../../assets/image/faceplates/lf09.png'
import rf09 from '../../assets/image/faceplates/rf09.png'

import lf10 from '../../assets/image/faceplates/lf10.png'
import rf10 from '../../assets/image/faceplates/rf10.png'

// standard shell images
import leftShellImage from '../../assets/EarImages/ls01.png';
import rightShellImage from '../../assets/EarImages/rs01.png';

import ls17 from '../../assets/shells custom/ls17.png'
import rs17 from '../../assets/shells custom/rs17.png'

import ls18 from '../../assets/shells custom/ls18.png'
import rs18 from '../../assets/shells custom/rs18.png'

import ls19 from '../../assets/shells custom/ls19.png'
import rs19 from '../../assets/shells custom/rs19.png'



import ls20 from '../../assets/shells custom/ls20.png'
import rs20 from '../../assets/shells custom/rs20.png'

import ls21 from '../../assets/shells custom/ls21.png'
import rs21 from '../../assets/shells custom/rs21.png'

import ls22 from '../../assets/shells custom/ls22.png'
import rs22 from '../../assets/shells custom/rs22.png'

import ls23 from '../../assets/shells custom/ls23.png'
import rs23 from '../../assets/shells custom/rs23.png'

import ls24 from '../../assets/shells custom/ls24.png'
import rs24 from '../../assets/shells custom/rs24.png'

import ls25 from '../../assets/shells custom/ls25.png'
import rs25 from '../../assets/shells custom/rs25.png'

import ls26 from '../../assets/shells custom/ls26.png'
import rs26 from '../../assets/shells custom/rs26.png'

import ls27 from '../../assets/shells custom/ls27.png'
import rs27 from '../../assets/shells custom/rs27.png'

import ls28 from '../../assets/shells custom/ls28.png'
import rs28 from '../../assets/shells custom/rs28.png'

// Custom shell images

import ls01 from '../../assets/shells standard/ls01.png'
import rs01 from '../../assets/shells standard/rs01.png'

import ls02 from '../../assets/shells standard/ls02.png'
import rs02 from '../../assets/shells standard/rs02.png'

import ls03 from '../../assets/shells standard/ls03.png'
import rs03 from '../../assets/shells standard/rs03.png'

import ls04 from '../../assets/shells standard/ls04.png'
import rs04 from '../../assets/shells standard/rs04.png'

import ls05 from '../../assets/shells standard/ls05.png'
import rs05 from '../../assets/shells standard/rs05.png'

import ls06 from '../../assets/shells standard/ls06.png'
import rs06 from '../../assets/shells standard/rs06.png'

import ls07 from '../../assets/shells standard/ls07.png'
import rs07 from '../../assets/shells standard/rs07.png'

import ls08 from '../../assets/shells standard/ls08.png'
import rs08 from '../../assets/shells standard/rs08.png'

import ls09 from '../../assets/shells standard/ls09.png'
import rs09 from '../../assets/shells standard/rs09.png'

import ls10 from '../../assets/shells standard/ls10.png'
import rs10 from '../../assets/shells standard/rs10.png'

import ls11 from '../../assets/shells standard/ls11.png'
import rs11 from '../../assets/shells standard/rs11.png'

import ls12 from '../../assets/shells standard/ls12.png'
import rs12 from '../../assets/shells standard/rs12.png'

import ls13 from '../../assets/shells standard/ls13.png'
import rs13 from '../../assets/shells standard/rs13.png'

import ls14 from '../../assets/shells standard/ls14.png'
import rs14 from '../../assets/shells standard/rs14.png'

import ls15 from '../../assets/shells standard/ls15.png'
import rs15 from '../../assets/shells standard/rs15.png'

import ls16 from '../../assets/shells standard/ls16.png'
import rs16 from '../../assets/shells standard/rs16.png'

import ls29 from '../../assets/shells standard/ls29.png'
import rs29 from '../../assets/shells standard/rs29.png'

import ls30 from '../../assets/shells standard/ls30.png'
import rs30 from '../../assets/shells standard/rs30.png'

import ls31 from '../../assets/shells standard/ls31.png'
import rs31 from '../../assets/shells standard/rs31.png'

import ls32 from '../../assets/shells standard/ls32.png'
import rs32 from '../../assets/shells standard/rs32.png'

import ls33 from '../../assets/shells standard/ls33.png'
import rs33 from '../../assets/shells standard/rs33.png'

import ls34 from '../../assets/shells standard/ls34.png'
import rs34 from '../../assets/shells standard/rs34.png'

import ls35 from '../../assets/shells standard/ls35.png'
import rs35 from '../../assets/shells standard/rs35.png'

import ls36 from '../../assets/shells standard/ls36.png'
import rs36 from '../../assets/shells standard/rs36.png'

import ls37 from '../../assets/shells standard/ls37.png'
import rs37 from '../../assets/shells standard/rs37.png'

import ls38 from '../../assets/shells standard/ls38.png'
import rs38 from '../../assets/shells standard/rs38.png'

import ls39 from '../../assets/shells standard/ls39.png'
import rs39 from '../../assets/shells standard/rs39.png'

import ls40 from '../../assets/shells standard/ls40.png'
import rs40 from '../../assets/shells standard/rs40.png'

import ls41 from '../../assets/shells standard/ls41.png'
import rs41 from '../../assets/shells standard/rs41.png'

import ls42 from '../../assets/shells standard/ls42.png'
import rs42 from '../../assets/shells standard/rs42.png'

class CustomOrder extends Component {
    constructor(props) {
        super(props);
        this.state={
            left: lf05, 
            right: rf05,
            leftColor: "White Solid",
            rightColor: "White Solid",

            leftShellColor: "",
            rightShellColor: "",
            // initialText: '',
            initialName: "",
            initialValue: "",
            price: 499,

            leftShell : leftShellImage,
            rightShell : rightShellImage,
        }


        // standard faceplates
        this.handlerWhiteSolid = this.handlerWhiteSolid.bind(this);
        this.handlerRed = this.handlerRed.bind(this);
        this.handlerBlack = this.handlerBlack.bind(this);
        this.handlerLightYellow = this.handlerLightYellow.bind(this);
        this.handlerOrange = this.handlerOrange.bind(this);
        this.handlerBlue = this.handlerBlue.bind(this);
        this.handlerSkyBlue = this.handlerSkyBlue.bind(this);
        this.handlerViolet = this.handlerViolet.bind(this);
        this.handlerYellow = this.handlerYellow.bind(this);
        this.handlerWhite = this.handlerWhite.bind(this);

        this.selectedLeftButton = this.selectedLeftButton.bind(this);
        this.selectedBothButton = this.selectedBothButton.bind(this);
        this.selectedRightButton = this.selectedRightButton.bind(this);

        // this.handlerInitialValue = this.handlerInitialValue.bind(this);
        
        // premium faceplates
        this.handlerPremium1 = this.handlerPremium1.bind(this);
        this.handlerPremium2 = this.handlerPremium2.bind(this);
        this.handlerPremium3 = this.handlerPremium3.bind(this);
        this.handlerPremium4 = this.handlerPremium4.bind(this);
        this.handlerPremium5 = this.handlerPremium5.bind(this);

        // custom faceplates
        this.handlerCustom1 = this.handlerCustom1.bind(this);
        this.handlerCustom2 = this.handlerCustom2.bind(this);
        this.handlerCustom3 = this.handlerCustom3.bind(this);
        this.handlerCustom4 = this.handlerCustom4.bind(this);
        this.handlerCustom5 = this.handlerCustom5.bind(this);

        this.handlerCustom6 = this.handlerCustom6.bind(this);
        this.handlerCustom7 = this.handlerCustom7.bind(this);
        this.handlerCustom8 = this.handlerCustom8.bind(this);
        this.handlerCustom9 = this.handlerCustom9.bind(this);
        this.handlerCustom10 = this.handlerCustom10.bind(this);

        this.handlerCustom11 = this.handlerCustom11.bind(this);
        this.handlerCustom12 = this.handlerCustom12.bind(this);
        this.handlerCustom13 = this.handlerCustom13.bind(this);
        this.handlerCustom14 = this.handlerCustom14.bind(this);
        this.handlerCustom15 = this.handlerCustom15.bind(this);

        this.handlerCustom16 = this.handlerCustom16.bind(this);
        this.handlerCustom17 = this.handlerCustom17.bind(this);
        this.handlerCustom18 = this.handlerCustom18.bind(this);
        this.handlerCustom19 = this.handlerCustom19.bind(this);
        this.handlerCustom20 = this.handlerCustom20.bind(this);

        this.handlerCustom21 = this.handlerCustom21.bind(this);
        this.handlerCustom22 = this.handlerCustom22.bind(this);
        this.handlerCustom23 = this.handlerCustom23.bind(this);
        this.handlerCustom24 = this.handlerCustom24.bind(this);
        this.handlerCustom25 = this.handlerCustom25.bind(this);

        // Standard Shell
        this.handlerStandardShell1 = this.handlerStandardShell1.bind(this);
        this.handlerStandardShell2 = this.handlerStandardShell2.bind(this);
        this.handlerStandardShell3 = this.handlerStandardShell3.bind(this);
        this.handlerStandardShell4 = this.handlerStandardShell4.bind(this);
        this.handlerStandardShell5 = this.handlerStandardShell5.bind(this);
        this.handlerStandardShell6 = this.handlerStandardShell6.bind(this);

        this.handlerStandardShell7 = this.handlerStandardShell7.bind(this);
        this.handlerStandardShell8 = this.handlerStandardShell8.bind(this);
        this.handlerStandardShell9 = this.handlerStandardShell9.bind(this);
        this.handlerStandardShell10 = this.handlerStandardShell10.bind(this);
        this.handlerStandardShell11 = this.handlerStandardShell11.bind(this);
        this.handlerStandardShell12 = this.handlerStandardShell12.bind(this);

        // Custom Shell
        this.handlerCustomShell1 = this.handlerCustomShell1.bind(this);
        this.handlerCustomShell2 = this.handlerCustomShell2.bind(this);
        this.handlerCustomShell3 = this.handlerCustomShell3.bind(this);
        this.handlerCustomShell4 = this.handlerCustomShell4.bind(this);
        this.handlerCustomShell5 = this.handlerCustomShell5.bind(this);
        this.handlerCustomShell6 = this.handlerCustomShell6.bind(this);
        this.handlerCustomShell7 = this.handlerCustomShell7.bind(this);
        this.handlerCustomShell8 = this.handlerCustomShell8.bind(this);
        this.handlerCustomShell9 = this.handlerCustomShell9.bind(this);
        this.handlerCustomShell10 = this.handlerCustomShell10.bind(this);

        this.handlerCustomShell11 = this.handlerCustomShell11.bind(this);
        this.handlerCustomShell12 = this.handlerCustomShell12.bind(this);
        this.handlerCustomShell13 = this.handlerCustomShell13.bind(this);
        this.handlerCustomShell14 = this.handlerCustomShell14.bind(this);
        this.handlerCustomShell15 = this.handlerCustomShell15.bind(this);
        this.handlerCustomShell16 = this.handlerCustomShell16.bind(this);
        this.handlerCustomShell17 = this.handlerCustomShell17.bind(this);
        this.handlerCustomShell18 = this.handlerCustomShell18.bind(this);
        this.handlerCustomShell19 = this.handlerCustomShell19.bind(this);
        this.handlerCustomShell20 = this.handlerCustomShell20.bind(this);

        this.handlerCustomShell21 = this.handlerCustomShell21.bind(this);
        this.handlerCustomShell22 = this.handlerCustomShell22.bind(this);
        this.handlerCustomShell23 = this.handlerCustomShell23.bind(this);
        this.handlerCustomShell24 = this.handlerCustomShell24.bind(this);
        this.handlerCustomShell25 = this.handlerCustomShell25.bind(this);
        this.handlerCustomShell26 = this.handlerCustomShell26.bind(this);
        this.handlerCustomShell27 = this.handlerCustomShell27.bind(this);
        this.handlerCustomShell28 = this.handlerCustomShell28.bind(this);
        this.handlerCustomShell29 = this.handlerCustomShell29.bind(this);
        this.handlerCustomShell30 = this.handlerCustomShell30.bind(this);

        
    }

    // premium faceplate
    handlerPremium1() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf15,
                leftColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf15,
                right: rf15,
                leftColor: "",
                rightColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf15,
                rightColor: "",
                price: 599,
            });
        }
    }

    handlerPremium2() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf16,
                leftColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf16,
                right: rf16,
                leftColor: "",
                rightColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf16,
                rightColor: "",
                price: 599,
            });
        }
    }

    handlerPremium3() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf17,
                leftColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf17,
                right: rf17,
                leftColor: "",
                rightColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf17,
                rightColor: "",
                price: 599,
            });
        }
    }

    handlerPremium4() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf28,
                leftColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf28,
                right: rf28,
                leftColor: "",
                rightColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf28,
                rightColor: "",
                price: 599,
            });
        }
    }

    handlerPremium5() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf29,
                leftColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf29,
                right: rf29,
                leftColor: "",
                rightColor: "",
                price: 599,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf29,
                rightColor: "",
                price: 599,
            });
        }
    }


    // custom faceplate

    handlerCustom1() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf11,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf11,
                right: rf11,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf11,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom2() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf12,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf12,
                right: rf12,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf12,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom3() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf13,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf13,
                right: rf13,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf13,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom4() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf14,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf14,
                right: rf14,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf14,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom5() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf18,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf18,
                right: rf18,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf18,
                rightColor:  "",
                price: 549,
            });
        }
    }

    handlerCustom6() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf19,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf19,
                right: rf19,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf19,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom7() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf20,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf20,
                right: rf20,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf20,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom8() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf21,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf21,
                right: rf21,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf21,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom9() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf22,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf22,
                right: rf22,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf22,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom10() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf23,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf23,
                right: rf23,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf23,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom11() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf24,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf24,
                right: rf24,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf24,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom12() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf25,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf25,
                right: rf25,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf25,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom13() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf26,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf26,
                right: rf26,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf26,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom14() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf27,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf27,
                right: rf27,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf27,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom15() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf30,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf30,
                right: rf30,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf30,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom16() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf31,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf31,
                right: rf31,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf31,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom17() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf32,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf32,
                right: rf32,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf32,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom18() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf33,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf33,
                right: rf33,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf33,
                rightColor: "",
                price: 549,
            });
        }
    }


    handlerCustom19() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf34,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf34,
                right: rf34,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf34,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom20() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf35,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf35,
                right: rf35,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf35,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom21() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf36,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf36,
                right: rf36,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf36,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom22() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf37,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf37,
                right: rf37,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf37,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom23() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf38,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf38,
                right: rf38,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf38,
                rightColor: "",
                price: 549,
            });
        }
    }
    handlerCustom24() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf39,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf39,
                right: rf39,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf39,
                rightColor: "",
                price: 549,
            });
        }
    }

    handlerCustom25() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf40,
                leftColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf40,
                right: rf40,
                leftColor: "",
                rightColor: "",
                price: 549,
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf40,
                rightColor: "",
                price: 549,
            });
        }
    }

    // standard faceplate

    handlerWhiteSolid() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf05,
                leftColor: "White Solid",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf05,
                right: rf05,
                leftColor: "White Solid",
                rightColor: "White Solid",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf05,
                rightColor: "White Solid",
            });
        }
    }

    handlerRed() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf02,
                leftColor: "Red",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf02,
                right: rf02,
                leftColor: "Red",
                rightColor: "Red",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf02,
                rightColor: "Red",
            });
        }
     }

    handlerBlack() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf09,
                leftColor: "Black",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf09,
                right: rf09,
                leftColor: "Black",
                rightColor: "Black",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf09,
                rightColor: "Black",
            });
        }
    }

     handlerLightYellow() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf06,
                leftColor: "Light Yellow",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf06,
                right: rf06,
                leftColor: "Light Yellow",
                rightColor: "Light Yellow",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf06,
                rightColor: "Light Yellow",
            });
        }
     }

     handlerOrange() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf07,
                leftColor: "Orange",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf07,
                right: rf07,
                leftColor: "Orange",
                rightColor: "Orange",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf07,
                rightColor: "Orange",
            });
        }
     }
     handlerBlue() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf01,
                leftColor: "Blue",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf01,
                right: rf01,
                leftColor: "Blue",
                rightColor: "Blue",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf01,
                rightColor: "Blue",
            });
        }
     }

     handlerSkyBlue() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf03,
                leftColor: "Sky Blue",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf03,
                right: rf03,
                leftColor: "Sky Blue",
                rightColor: "Sky Blue",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf03,
                rightColor: "Sky Blue",
            });
        }
     }

     handlerViolet() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf04,
                leftColor: "Violet",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf04,
                right: rf04,
                leftColor: "Violet",
                rightColor: "Violet",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf04,
                rightColor: "Violet",
            });
        }
     }

     handlerYellow() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf08,
                leftColor: "Yellow",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf08,
                right: rf08,
                leftColor: "Yellow",
                rightColor: "Yellow",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf08,
                rightColor: "Yellow",
            });
        }
     }

     handlerWhite() {
        if(this.state.checker == "left"){
            this.setState({
                left: lf10,
                leftColor: "White",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                left: lf10,
                right: rf10,
                leftColor: "White",
                rightColor: "White",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                right: rf10,
                rightColor: "White",
            });
        }
     }

     // custom shell 

    handlerStandardShell1() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls17,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls17,
                rightShell: rs17,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs17,
                rightColor: "",
            });
        }
    }

    handlerStandardShell2() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls18,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls18,
                rightShell: rs18,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs18,
                rightColor: "",
            });
        }
    }

    handlerStandardShell3() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls19,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls19,
                rightShell: rs19,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs19,
                rightColor: "",
            });
        }
    }

    handlerStandardShell4() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls20,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls20,
                rightShell: rs20,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs20,
                rightColor: "",
            });
        }
    }

    handlerStandardShell5() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls21,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls21,
                rightShell: rs21,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs21,
                rightColor: "",
            });
        }
    }

    handlerStandardShell6() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls22,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls22,
                rightShell: rs22,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs22,
                rightColor: "",
            });
        }
    }

    handlerStandardShell7() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls23,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls23,
                rightShell: rs23,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs23,
                rightColor: "",
            });
        }
    }

    handlerStandardShell8() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls24,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls24,
                rightShell: rs24,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs24,
                rightColor: "",
            });
        }
    }

    handlerStandardShell9() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls25,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls25,
                rightShell: rs25,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs25,
                rightColor: "",
            });
        }
    }

    handlerStandardShell10() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls26,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls26,
                rightShell: rs26,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs26,
                rightColor: "",
            });
        }
    }

    handlerStandardShell11() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls27,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls27,
                rightShell: rs27,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs27,
                rightColor: "",
            });
        }
    }

    handlerStandardShell12() {
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls28,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls28,
                rightShell: rs28,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs28,
                rightColor: "",
            });
        }
    }

    // custom shell
    handlerCustomShell1(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls01,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls01,
                rightShell: rs01,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs01,
                rightColor: "",
            });
        }
    }

    handlerCustomShell2(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls02,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls02,
                rightShell: rs02,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs02,
                rightColor: "",
            });
        }
    }

    handlerCustomShell3(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls03,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls03,
                rightShell: rs03,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs03,
                rightColor: "",
            });
        }
    }

    handlerCustomShell4(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls04,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls04,
                rightShell: rs04,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs04,
                rightColor: "",
            });
        }
    }

    handlerCustomShell5(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls05,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls05,
                rightShell: rs05,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs05,
                rightColor: "",
            });
        }
    }

    handlerCustomShell6(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls06,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls06,
                rightShell: rs06,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs06,
                rightColor: "",
            });
        }
    }

    handlerCustomShell7(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls07,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls07,
                rightShell: rs07,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs07,
                rightColor: "",
            });
        }
    }

    handlerCustomShell8(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls08,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls08,
                rightShell: rs08,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs08,
                rightColor: "",
            });
        }
    }

    handlerCustomShell9(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls09,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls09,
                rightShell: rs09,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs09,
                rightColor: "",
            });
        }
    }

    handlerCustomShell10(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls10,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls10,
                rightShell: rs10,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs10,
                rightColor: "",
            });
        }
    }

    handlerCustomShell11(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls11,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls11,
                rightShell: rs11,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs11,
                rightColor: "",
            });
        }
    }

    handlerCustomShell12(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls12,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls12,
                rightShell: rs12,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs12,
                rightColor: "",
            });
        }
    }

    handlerCustomShell13(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls13,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls13,
                rightShell: rs13,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs13,
                rightColor: "",
            });
        }
    }

    handlerCustomShell14(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls14,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls14,
                rightShell: rs14,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs14,
                rightColor: "",
            });
        }
    }

    handlerCustomShell15(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls15,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls15,
                rightShell: rs15,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs15,
                rightColor: "",
            });
        }
    }

    handlerCustomShell16(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls16,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls16,
                rightShell: rs16,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs16,
                rightColor: "",
            });
        }
    }

    handlerCustomShell17(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls29,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls29,
                rightShell: rs29,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs29,
                rightColor: "",
            });
        }
    }

    handlerCustomShell18(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls30,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls30,
                rightShell: rs30,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs30,
                rightColor: "",
            });
        }
    }

    handlerCustomShell19(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls31,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls31,
                rightShell: rs31,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs31,
                rightColor: "",
            });
        }
    }

    handlerCustomShell20(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls32,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls32,
                rightShell: rs32,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs32,
                rightColor: "",
            });
        }
    }

    handlerCustomShell21(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls33,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls33,
                rightShell: rs33,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs33,
                rightColor: "",
            });
        }
    }    

    handlerCustomShell22(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls34,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls34,
                rightShell: rs34,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs34,
                rightColor: "",
            });
        }
    }

    handlerCustomShell23(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls35,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls35,
                rightShell: rs35,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs35,
                rightColor: "",
            });
        }
    }

    handlerCustomShell24(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls36,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls36,
                rightShell: rs36,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs36,
                rightColor: "",
            });
        }
    }

    handlerCustomShell25(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls37,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls37,
                rightShell: rs37,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs37,
                rightColor: "",
            });
        }
    }

    handlerCustomShell26(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls38,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls38,
                rightShell: rs38,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs38,
                rightColor: "",
            });
        }
    }

    handlerCustomShell27(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls39,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls39,
                rightShell: rs39,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs39,
                rightColor: "",
            });
        }
    }

    handlerCustomShell28(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls40,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls40,
                rightShell: rs40,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs40,
                rightColor: "",
            });
        }
    }

    handlerCustomShell29(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls41,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls41,
                rightShell: rs41,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs41,
                rightColor: "",
            });
        }
    }

    handlerCustomShell30(){
        if(this.state.checker == "left"){
            this.setState({
                leftShell: ls42,
                leftShellColor: "",
            });
        }
        if(this.state.checker == "both"){
            this.setState({
                leftShell: ls42,
                rightShell: rs42,
                leftShellColor: "",
                rightShellColor: "",
            });
        }
        if(this.state.checker == "right"){
            this.setState({
                rightShell: rs42,
                rightColor: "",
            });
        }
    }



    // button selection

     selectedLeftButton(){
        this.setState({
            checker:"left",
            activeLeft: "active",
            activeBoth: "",
            activeRight: ""})
      }
      selectedBothButton(){
        this.setState({
            checker:"both",
            activeLeft: "",
            activeBoth: "active",
            activeRight: ""
        })
      }
      selectedRightButton(){
        this.setState({
            checker:"right",
            activeLeft: "",
            activeBoth: "",
            activeRight: "active",})
        }
        
        // handlerInitialValue(data){
        //   this.setState({
        //     initialText : data
        //   })
        // }
      

    render() {
        
        console.log('parent ' + this.state.initialName);
        
        return(
            <div className="container">
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-3">
                        <div className="item-customize"> 
                            <div>
                                <br/>

                                <FacePlate 
                                    handlewhiteSolid = {this.handlerWhiteSolid}
                                    handleRed = {this.handlerRed}
                                    handleBlack = {this.handlerBlack}
                                    handleLightYellow = {this.handlerLightYellow}
                                    handleOrange = {this.handlerOrange}
                                    handleBlue = {this.handlerBlue}
                                    handleSkyBlue = {this.handlerSkyBlue}
                                    handleViolet = {this.handlerViolet}
                                    handleYellow = {this.handlerYellow}
                                    handleWhite = {this.handlerWhite}

                                    handlePremium1 = {this.handlerPremium1}
                                    handlePremium2 = {this.handlerPremium2}
                                    handlePremium3 = {this.handlerPremium3}
                                    handlePremium4 = {this.handlerPremium4}
                                    handlePremium5 = {this.handlerPremium5}
                                    
                                    handleCustom1 = {this.handlerCustom1}
                                    handleCustom2 = {this.handlerCustom2}
                                    handleCustom3 = {this.handlerCustom3}
                                    handleCustom4 = {this.handlerCustom4}
                                    handleCustom5 = {this.handlerCustom5}
                                    handleCustom6 = {this.handlerCustom6}
                                    handleCustom7 = {this.handlerCustom7}
                                    handleCustom8 = {this.handlerCustom8}
                                    handleCustom9 = {this.handlerCustom9}
                                    handleCustom10 = {this.handlerCustom10}
                                    handleCustom11 = {this.handlerCustom11}
                                    handleCustom12 = {this.handlerCustom12}
                                    handleCustom13 = {this.handlerCustom13}
                                    handleCustom14 = {this.handlerCustom14}
                                    handleCustom15 = {this.handlerCustom15}
                                    handleCustom16 = {this.handlerCustom16}
                                    handleCustom17 = {this.handlerCustom17}
                                    handleCustom18 = {this.handlerCustom18}
                                    handleCustom19 = {this.handlerCustom19}
                                    handleCustom20 = {this.handlerCustom20}
                                    handleCustom21 = {this.handlerCustom21}
                                    handleCustom22 = {this.handlerCustom22}
                                    handleCustom23 = {this.handlerCustom23}
                                    handleCustom24 = {this.handlerCustom24}
                                    handleCustom25 = {this.handlerCustom25}

                                    standardShell1 = {this.handlerStandardShell1}
                                    standardShell2 = {this.handlerStandardShell2}
                                    standardShell3 = {this.handlerStandardShell3}
                                    standardShell4 = {this.handlerStandardShell4}
                                    standardShell5 = {this.handlerStandardShell5}
                                    standardShell6 = {this.handlerStandardShell6}
                                    standardShell7 = {this.handlerStandardShell7}
                                    standardShell8 = {this.handlerStandardShell8}
                                    standardShell9 = {this.handlerStandardShell9}
                                    standardShell10 = {this.handlerStandardShell10}
                                    standardShell11 = {this.handlerStandardShell11}
                                    standardShell12 = {this.handlerStandardShell12}

                                    handleCustomShell1 = {this.handlerCustomShell1}
                                    handleCustomShell2 = {this.handlerCustomShell2}
                                    handleCustomShell3 = {this.handlerCustomShell3}
                                    handleCustomShell4 = {this.handlerCustomShell4}
                                    handleCustomShell5 = {this.handlerCustomShell5}
                                    handleCustomShell6 = {this.handlerCustomShell6}
                                    handleCustomShell7 = {this.handlerCustomShell7}
                                    handleCustomShell8 = {this.handlerCustomShell8}
                                    handleCustomShell9 = {this.handlerCustomShell9}
                                    handleCustomShell10 = {this.handlerCustomShell10}
                                    handleCustomShell11 = {this.handlerCustomShell11}
                                    handleCustomShell12 = {this.handlerCustomShell12}
                                    handleCustomShell13 = {this.handlerCustomShell13}
                                    handleCustomShell14 = {this.handlerCustomShell14}
                                    handleCustomShell15 = {this.handlerCustomShell15}
                                    handleCustomShell16 = {this.handlerCustomShell16}
                                    handleCustomShell17 = {this.handlerCustomShell17}
                                    handleCustomShell18 = {this.handlerCustomShell18}
                                    handleCustomShell19 = {this.handlerCustomShell19}
                                    handleCustomShell20 = {this.handlerCustomShell20}
                                    handleCustomShell21 = {this.handlerCustomShell21}
                                    handleCustomShell22 = {this.handlerCustomShell22}
                                    handleCustomShell23 = {this.handlerCustomShell23}
                                    handleCustomShell24 = {this.handlerCustomShell24}
                                    handleCustomShell25 = {this.handlerCustomShell25}
                                    handleCustomShell26 = {this.handlerCustomShell26}
                                    handleCustomShell27 = {this.handlerCustomShell27}
                                    handleCustomShell28 = {this.handlerCustomShell28}
                                    handleCustomShell29 = {this.handlerCustomShell29}
                                    handleCustomShell30 = {this.handlerCustomShell30}

                                   // handleInitialValue={this.handlerInitialValue} 
                                     />
                                
                            </div>
                        </div>
                    </div>
                     
                    <section>
                        <div className="col-md-6">
                            <div className="row">            
                                <div className="product-preview">
                                <img style={{display:"", width:"auto", height:"360px", marginLeft: '73px'}}  src={require('../../assets/image/SS_U9_side.png')}/>

                                <img className="responsive" style={{display:"", width:"249px", height:"326px", marginLeft:"79px", marginTop:"-409px", paddingLeft:"-60px"}} id="adel-mask-preload-left"  src={this.state.leftShell} />

                                    <span style={{fontSize: "20px", marginTop:"-160px", marginLeft: "175px", zIndex: 1,}}>{this.state.initialName}</span>

                                <img className="responsive mainImg" style={{width:"202px", height:"329px", marginTop:"-409px", zIndex:"-1px", marginLeft:"-227px"}} id="adel-mask-preload-left"  src={this.state.left} />

                                <img className="responsive" style={{ width:"211px", height:"341px", marginLeft:"282px", marginTop:"-436px"}} id="adel-mask-preload-left"  src={this.state.rightShell}/>
                                       
                                    <span style={{fontSize: "20px", marginTop:"-160px", marginLeft: "411px", zIndex: 1,}}>{this.state.initialName}</span>

                                <img className="responsive" style={{width:"202px", height:"327px", marginLeft:"302px", marginTop:"-464px"}} id="adel-mask-preload-left"  src={this.state.right}/>
                                </div>
                           </div>                                    
                                
                        <div className="">
                            <div className="col-md-3 text-center group-btn">
                                <span className={'btn btn-primary ' + this.state.activeLeft} onClick={this.selectedLeftButton}  name="left"> Left </span>
                            </div>

                            <div className="col-md-6 text-center group-btn">
                                <span  className={'btn btn-primary ' + this.state.activeBoth} onClick={this.selectedBothButton}  name="both"> Both </span>
                            </div>

                            <div className="col-md-3 text-center group-btn">
                                <span className={'btn btn-primary ' + this.state.activeRight} onClick={this.selectedRightButton}  name="right"> Right </span>
                            </div>

                        </div>

                    </div>
                    </section>

                            <div className="col-md-3" id="print-col"> 
                                <div className="item-customize"> 
                                <Artwork
                                    handlerFromParant={this.handlerInitialValue}
                                /></div>
                            </div>
                    </div>

                    <div className="row">

                    <div className="col-md-9"> 
                        <div className="item-specifications">
                            <h4>Specifications</h4>
                        
                            <div className="row">
                                <div className="col-sm-6">
                                    
                                    <label>Left FacePlate : <span>{this.state.leftColor}</span></label>
                                    <label>Right FacePlate : <span>{this.state.rightColor}</span></label>

                                    <label>Left Shell : <span>{this.state.leftShellColor}</span></label>
                                    <label>Right Shell : <span>{this.state.rightShellColor}</span></label>

                                    <label>Drivers : <span>2</span></label>
                                    <label>Typer of Drivers : <span>Hybrid</span></label>
                                    <label>Confirguration : <span>* 1x Dynamic (Low/Mid)
                                            * 1x Balanced Armature (High)</span></label>
                                    <label>Crossover : <span>Nil</span></label>
                                    </div>    
                            

                                <div className="col-sm-6">
                                    <label>Isolation : <span>-32dB</span></label>
                                    <label>Bore : <span>2</span></label>

                                    <label>Frequency Response : <span>20Hz - 20kHz</span></label>
                                    <label>Sensitivity : <span>103dB SOK @ 1mW</span></label>
                                    <label>Impedance : <span>16 Ohms @ 1kHz</span></label>
                                    <label>THD : <span> 1% @ 1kHz</span></label>
                                    <label>Warranty Period : <span>1 Year</span></label>
                                    <label>Refit Policy : <span>30 Days</span></label>
                                
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                            <div className="item-pricing">
                                <h3>Price</h3>
                                <p>US ${this.state.price}</p>
                            </div>
                    </div>
                    
                </div>
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
export default CustomOrder;