// import React, { Component}  from 'react';
// import {Link} from 'react-router-dom';
// import Radium from 'radium'
// import "./Slider.css";

// class Slider extends Component {
// 	render() {
// 		return(
// 			<div className="slider" id="slider">
// 				<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
// 					<div className="carousel-inner">
// 						<div className="carousel-item active">
// 							<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/8590/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/305244/pexels-photo-305244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 						</div>
// 						<div className="carousel-item">
// 							<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 						</div>
// 					</div>			
// 				</div>
					
			
// 		</div>	
			
// 		);
// 	}
// }

// export default Slider


import React, { Component}  from 'react';
import {Link} from 'react-router-dom';
// import Radium from 'radium'
// import "./Slider.css";

// class Slider extends Component {
// 	render() {
// 		return(
// 			<div className="slider" id="slider">
// 				<div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
// 				<div className="carousel-inner">
// 					<div className="carousel-item active">
// 						<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/8590/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First slide" />
// 					</div>
// 					<div className="carousel-item">
// 						<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/89699/pexels-photo-89699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second slide"/>
// 					</div>
// 					<div className="carousel-item">
// 						<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/305244/pexels-photo-305244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 					</div>
// 					<div className="carousel-item">
// 						<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/186076/pexels-photo-186076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 					</div>
// 					<div className="carousel-item">
// 						<img className="d-block w-100 img-responsive" src="https://images.pexels.com/photos/161172/cycling-bike-trail-sport-161172.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third slide"/>
// 					</div>
// 				</div>
// 				</div>			
// 			</div>		
// 		);
// 	}
// }

// export default Radium(Slider)
import Carousel from 'react-responsive-carousel';
// var Carousel = require('react-responsive-carousel').Carousel;

class Slider extends Component {
    render() {
        return (
            <Carousel showArrows={true} >
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="assets/4.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="assets/5.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
                <div>
                    <img src="assets/6.jpeg" />
                    <p className="legend">Legend 6</p>
                </div>
            </Carousel>
        );
  	}
}
export default Slider

